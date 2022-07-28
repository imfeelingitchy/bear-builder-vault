'reach 0.1'
'use strict'

export const main = Reach.App(() => {
  setOptions({untrustworthyMaps: true})

  const Alice = Participant('Alice', {
    ready: Fun([], Null),
    deadlineIncrement: UInt, // every time Alice checks in to say she's still here, she gets this much more time
    fortune: UInt,
    fortuneType: Token,
  })

  const Bobs = API('Bobs', {
    attach: Fun([], Null),
    claim: Fun([], Null),
    next: Fun([], Null)
  })

  const AliceAPI = API('AliceAPI', {
    stillHere: Fun([], Null),
    giveBack: Fun([], Null)
  })


  init()

  Alice.only(() => {
    const [deadlineIncrement, fortune, fortuneType] = declassify([interact.deadlineIncrement, interact.fortune, interact.fortuneType])
  })
  Alice.publish(deadlineIncrement, fortune, fortuneType)
  commit()
  Alice.pay([[fortune, fortuneType]])
  Alice.interact.ready()
  
  const addresses = new Set()
  const initDeadlineBlock = lastConsensusTime() + deadlineIncrement

  const [keepGoing, deadlineBlock, howManyAttachers, mustGiveBack] = parallelReduce([true, initDeadlineBlock, 0, false])
    .invariant(balance() == 0 && balance(fortuneType) == fortune)
    .while(keepGoing)
    .api(Bobs.attach, // new people can claim part of the fortune
      () => {check(!addresses.member(this), "duplicate")},
      () => 0,
      (k) => {
        check(!addresses.member(this))
        addresses.insert(this)
        k(null)
        return [true, deadlineBlock, howManyAttachers + 1, false]
      }
    )
    .api(AliceAPI.stillHere, // the deadline gets pushed back whenever Alice checks in
      () => {check(this == Alice)},
      () => 0,
      (k) => {
        check(this == Alice)
        k(null)
        return [true, thisConsensusTime() + deadlineIncrement, howManyAttachers, false]
      }
    )
    .api(AliceAPI.giveBack, // the deadline gets pushed back whenever Alice checks in
      () => {check(this == Alice)},
      () => 0,
      (k) => {
        check(this == Alice)
        k(null)
        return [false, deadlineBlock, howManyAttachers, true]
      }
    )
    .timeout(absoluteTime(deadlineBlock), () => { // Alice has not checked in for a while (timed out). She loses access to her money
      const [[], k] = call(Bobs.next)
      k(null)
      return [false, deadlineBlock, howManyAttachers, false]
    })

  if (howManyAttachers > 0 && !mustGiveBack) {

    const remainder = fortune % howManyAttachers // sometimes the token amount may not be exactly divisible
    var count = 0
    invariant(balance() == 0 && balance(fortuneType) == fortune / howManyAttachers * (howManyAttachers - count) + remainder)
    while (count < howManyAttachers) {
      commit()

      const [[], k] = call(Bobs.claim)
      .check(() => {check(addresses.member(this))})
      k(null)
      addresses.remove(this)

      transfer(fortune / howManyAttachers, fortuneType).to(this)

      count = count + 1
      continue
    }
    require(balance(fortuneType) == remainder)
    transfer(remainder, fortuneType).to(Alice) // give the spare change back to Alice I guess lol

  } else {
    transfer(balance(fortuneType), fortuneType).to(Alice) // if Alice demanded her money back within the deadline or if nobody claimed it, send it back to her
  }
  
  commit()
  exit()
    
});
