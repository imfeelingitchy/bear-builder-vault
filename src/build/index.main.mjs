// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc5],
      5: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc5],
      7: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    AliceAPI_giveBack0_61: ctc4,
    AliceAPI_stillHere0_61: ctc4,
    Bobs_attach0_61: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v578 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v579 = [v578];
  const v583 = stdlib.protect(ctc2, interact.deadlineIncrement, 'for Alice\'s interact field deadlineIncrement');
  const v584 = stdlib.protect(ctc2, interact.fortune, 'for Alice\'s interact field fortune');
  const v585 = stdlib.protect(ctc3, interact.fortuneType, 'for Alice\'s interact field fortuneType');
  
  const txn1 = await (ctc.sendrecv({
    args: [v583, v584, v585],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v589, v590, v591], secs: v593, time: v592, didSend: v31, from: v588 } = txn1;
      
      const v594 = v579[stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '0')];
      const v596 = v594[stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '1')];
      const v597 = v594[stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '2')];
      const v598 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v596, v597];
      const v599 = stdlib.Array_set(v579, stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '0'), v598);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v591
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v589, v590, v591], secs: v593, time: v592, didSend: v31, from: v588 } = txn1;
  const v594 = v579[stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '0')];
  const v596 = v594[stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '1')];
  const v597 = v594[stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '2')];
  const v598 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v596, v597];
  const v599 = stdlib.Array_set(v579, stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '0'), v598);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v588, v589, v590, v591, v592, v599],
    evt_cnt: 0,
    funcNum: 1,
    lct: v592,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0'), [[v590, v591]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v603, time: v602, didSend: v38, from: v601 } = txn2;
      
      ;
      const v604 = v599[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0')];
      const v605 = v604[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0')];
      const v606 = stdlib.add(v605, v590);
      const v609 = v604[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '1')];
      const v610 = v604[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '2')];
      const v611 = [v606, v609, v610];
      const v612 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0'), v611);
      sim_r.txns.push({
        amt: v590,
        kind: 'to',
        tok: v591
        });
      
      const v616 = stdlib.add(v592, v589);
      const v617 = v616;
      const v618 = stdlib.checkedBigNumberify('./index.rsh:39:111:decimal', stdlib.UInt_max, '0');
      const v619 = true;
      const v620 = false;
      const v621 = v602;
      const v627 = v612;
      
      if (await (async () => {
        
        return v619;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v829 = stdlib.gt(v618, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, '0'));
        const v830 = v620 ? false : true;
        const v831 = v829 ? v830 : false;
        if (v831) {
          const v832 = stdlib.mod(v590, v618);
          const v833 = stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0');
          const v834 = v621;
          const v840 = v627;
          
          if (await (async () => {
            const v852 = stdlib.lt(v833, v618);
            
            return v852;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v588,
              tok: v591
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v591
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v912 = v627[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
          const v913 = v912[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v588,
            tok: v591
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v591
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc2, ctc2, ctc3, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v603, time: v602, didSend: v38, from: v601 } = txn2;
  ;
  const v604 = v599[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0')];
  const v605 = v604[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0')];
  const v606 = stdlib.add(v605, v590);
  const v609 = v604[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '1')];
  const v610 = v604[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '2')];
  const v611 = [v606, v609, v610];
  const v612 = stdlib.Array_set(v599, stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0'), v611);
  ;
  const v613 = stdlib.addressEq(v588, v601);
  stdlib.assert(v613, {
    at: './index.rsh:33:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:34:23:application',
    fs: ['at ./index.rsh:34:23:application call to [unknown function] (defined at: ./index.rsh:34:23:function exp)', 'at ./index.rsh:34:23:application call to "liftedInteract" (defined at: ./index.rsh:34:23:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v616 = stdlib.add(v592, v589);
  let v617 = v616;
  let v618 = stdlib.checkedBigNumberify('./index.rsh:39:111:decimal', stdlib.UInt_max, '0');
  let v619 = true;
  let v620 = false;
  let v621 = v602;
  let v627 = v612;
  
  while (await (async () => {
    
    return v619;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc5],
      timeoutAt: ['time', v617],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v819], secs: v821, time: v820, didSend: v401, from: v818 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v822 = null;
      await txn4.getOutput('Bobs_next', 'v822', ctc0, v822);
      const cv617 = v617;
      const cv618 = v618;
      const cv619 = false;
      const cv620 = false;
      const cv621 = v820;
      const cv627 = v627;
      
      v617 = cv617;
      v618 = cv618;
      v619 = cv619;
      v620 = cv620;
      v621 = cv621;
      v627 = cv627;
      
      continue;
      }
    else {
      const {data: [v677], secs: v679, time: v678, didSend: v289, from: v676 } = txn3;
      switch (v677[0]) {
        case 'AliceAPI_giveBack0_61': {
          const v680 = v677[1];
          undefined /* setApiDetails */;
          ;
          const v688 = stdlib.addressEq(v676, v588);
          stdlib.assert(v688, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:65:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:11:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v690 = null;
          await txn3.getOutput('AliceAPI_giveBack', 'v690', ctc0, v690);
          const cv617 = v617;
          const cv618 = v618;
          const cv619 = false;
          const cv620 = true;
          const cv621 = v678;
          const cv627 = v627;
          
          v617 = cv617;
          v618 = cv618;
          v619 = cv619;
          v620 = cv620;
          v621 = cv621;
          v627 = cv627;
          
          continue;
          break;
          }
        case 'AliceAPI_stillHere0_61': {
          const v725 = v677[1];
          undefined /* setApiDetails */;
          ;
          const v743 = stdlib.addressEq(v676, v588);
          stdlib.assert(v743, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:11:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v745 = null;
          await txn3.getOutput('AliceAPI_stillHere', 'v745', ctc0, v745);
          const v752 = stdlib.add(v678, v589);
          const cv617 = v752;
          const cv618 = v618;
          const cv619 = true;
          const cv620 = false;
          const cv621 = v678;
          const cv627 = v627;
          
          v617 = cv617;
          v618 = cv618;
          v619 = cv619;
          v620 = cv620;
          v621 = cv621;
          v627 = cv627;
          
          continue;
          break;
          }
        case 'Bobs_attach0_61': {
          const v770 = v677[1];
          undefined /* setApiDetails */;
          ;
          const v800 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v676), null);
          let v801;
          switch (v800[0]) {
            case 'None': {
              const v802 = v800[1];
              v801 = false;
              
              break;
              }
            case 'Some': {
              const v803 = v800[1];
              v801 = true;
              
              break;
              }
            }
          const v804 = v801 ? false : true;
          stdlib.assert(v804, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:11:function exp)'],
            msg: null,
            who: 'Alice'
            });
          await stdlib.mapSet(map0, v676, null);
          const v807 = null;
          await txn3.getOutput('Bobs_attach', 'v807', ctc0, v807);
          const v813 = stdlib.add(v618, stdlib.checkedBigNumberify('./index.rsh:49:57:decimal', stdlib.UInt_max, '1'));
          const cv617 = v617;
          const cv618 = v813;
          const cv619 = true;
          const cv620 = false;
          const cv621 = v678;
          const cv627 = v627;
          
          v617 = cv617;
          v618 = cv618;
          v619 = cv619;
          v620 = cv620;
          v621 = cv621;
          v627 = cv627;
          
          continue;
          break;
          }
        }}
    
    }
  const v829 = stdlib.gt(v618, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, '0'));
  const v830 = v620 ? false : true;
  const v831 = v829 ? v830 : false;
  if (v831) {
    const v832 = stdlib.mod(v590, v618);
    let v833 = stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0');
    let v834 = v621;
    let v840 = v627;
    
    while (await (async () => {
      const v852 = stdlib.lt(v833, v618);
      
      return v852;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc4],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v863], secs: v865, time: v864, didSend: v484, from: v862 } = txn3;
      undefined /* setApiDetails */;
      const v867 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v862), null);
      let v868;
      switch (v867[0]) {
        case 'None': {
          const v869 = v867[1];
          v868 = false;
          
          break;
          }
        case 'Some': {
          const v870 = v867[1];
          v868 = true;
          
          break;
          }
        }
      stdlib.assert(v868, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:85:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
        msg: null,
        who: 'Alice'
        });
      ;
      const v872 = null;
      await txn3.getOutput('Bobs_claim', 'v872', ctc0, v872);
      await stdlib.mapSet(map0, v862, undefined /* Nothing */);
      const v878 = stdlib.div(v590, v618);
      const v879 = v840[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0')];
      const v880 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0')];
      const v884 = stdlib.sub(v880, v878);
      const v887 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '1')];
      const v888 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '2')];
      const v889 = [v884, v887, v888];
      const v890 = stdlib.Array_set(v840, stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0'), v889);
      ;
      const v891 = stdlib.add(v833, stdlib.checkedBigNumberify('./index.rsh:91:23:decimal', stdlib.UInt_max, '1'));
      const cv833 = v891;
      const cv834 = v864;
      const cv840 = v890;
      
      v833 = cv833;
      v834 = cv834;
      v840 = cv840;
      
      continue;
      
      }
    const v892 = v840[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
    const v893 = v892[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
    const v894 = stdlib.eq(v893, v832);
    stdlib.assert(v894, {
      at: './index.rsh:94:12:application',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    ;
    return;
    }
  else {
    const v912 = v627[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v913 = v912[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    ;
    return;
    }
  
  
  
  };
export async function _AliceAPI_giveBack7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AliceAPI_giveBack7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AliceAPI_giveBack7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AliceAPI_giveBack0_61: ctc8,
    AliceAPI_stillHere0_61: ctc8,
    Bobs_attach0_61: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v588, v589, v590, v591, v617, v618, v627] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7]);
  const v663 = ctc.selfAddress();
  const v665 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:62:10:application call to [unknown function] (defined at: ./index.rsh:62:10:function exp)', 'at ./index.rsh:39:84:application call to "runAliceAPI_giveBack0_61" (defined at: ./index.rsh:61:9:function exp)', 'at ./index.rsh:39:84:application call to [unknown function] (defined at: ./index.rsh:39:84:function exp)'],
    msg: 'in',
    who: 'AliceAPI_giveBack'
    });
  const v667 = stdlib.addressEq(v663, v588);
  stdlib.assert(v667, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:19:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:10:application call to [unknown function] (defined at: ./index.rsh:62:10:function exp)', 'at ./index.rsh:62:10:application call to [unknown function] (defined at: ./index.rsh:62:10:function exp)', 'at ./index.rsh:39:84:application call to "runAliceAPI_giveBack0_61" (defined at: ./index.rsh:61:9:function exp)', 'at ./index.rsh:39:84:application call to [unknown function] (defined at: ./index.rsh:39:84:function exp)'],
    msg: null,
    who: 'AliceAPI_giveBack'
    });
  const v671 = ['AliceAPI_giveBack0_61', v665];
  
  const txn1 = await (ctc.sendrecv({
    args: [v588, v589, v590, v591, v617, v618, v627, v671],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v677], secs: v679, time: v678, didSend: v289, from: v676 } = txn1;
      
      switch (v677[0]) {
        case 'AliceAPI_giveBack0_61': {
          const v680 = v677[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AliceAPI_giveBack"
            });
          ;
          const v690 = null;
          const v691 = await txn1.getOutput('AliceAPI_giveBack', 'v690', ctc0, v690);
          
          const v1473 = v618;
          const v1478 = stdlib.gt(v618, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, '0'));
          const v1480 = v1478 ? false : false;
          if (v1480) {
            const v1481 = stdlib.mod(v590, v618);
            const v1511 = stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0');
            const v1513 = v627;
            const v1514 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0'), v618);
            if (v1514) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v588,
                tok: v591
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v591
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1509 = v627[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            const v1510 = v1509[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v588,
              tok: v591
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v591
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'AliceAPI_stillHere0_61': {
          const v725 = v677[1];
          
          break;
          }
        case 'Bobs_attach0_61': {
          const v770 = v677[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v677], secs: v679, time: v678, didSend: v289, from: v676 } = txn1;
  switch (v677[0]) {
    case 'AliceAPI_giveBack0_61': {
      const v680 = v677[1];
      undefined /* setApiDetails */;
      ;
      const v688 = stdlib.addressEq(v676, v588);
      stdlib.assert(v688, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:65:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:11:function exp)'],
        msg: null,
        who: 'AliceAPI_giveBack'
        });
      const v690 = null;
      const v691 = await txn1.getOutput('AliceAPI_giveBack', 'v690', ctc0, v690);
      if (v289) {
        stdlib.protect(ctc0, await interact.out(v680, v691), {
          at: './index.rsh:61:10:application',
          fs: ['at ./index.rsh:61:10:application call to [unknown function] (defined at: ./index.rsh:61:10:function exp)', 'at ./index.rsh:66:10:application call to "k" (defined at: ./index.rsh:64:11:function exp)', 'at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:11:function exp)'],
          msg: 'out',
          who: 'AliceAPI_giveBack'
          });
        }
      else {
        }
      
      const v1473 = v618;
      const v1478 = stdlib.gt(v618, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, '0'));
      const v1480 = v1478 ? false : false;
      if (v1480) {
        const v1481 = stdlib.mod(v590, v618);
        const v1511 = stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0');
        const v1513 = v627;
        const v1514 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0'), v618);
        if (v1514) {
          return;
          }
        else {
          const v1515 = v627[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
          const v1516 = v1515[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
          const v1517 = stdlib.eq(v1516, v1481);
          stdlib.assert(v1517, {
            at: './index.rsh:94:12:application',
            fs: [],
            msg: null,
            who: 'AliceAPI_giveBack'
            });
          ;
          return;
          }}
      else {
        const v1509 = v627[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1510 = v1509[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        ;
        return;
        }
      break;
      }
    case 'AliceAPI_stillHere0_61': {
      const v725 = v677[1];
      return;
      break;
      }
    case 'Bobs_attach0_61': {
      const v770 = v677[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AliceAPI_stillHere7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AliceAPI_stillHere7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AliceAPI_stillHere7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AliceAPI_giveBack0_61: ctc8,
    AliceAPI_stillHere0_61: ctc8,
    Bobs_attach0_61: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v588, v589, v590, v591, v617, v618, v627] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7]);
  const v653 = ctc.selfAddress();
  const v655 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:53:10:application call to [unknown function] (defined at: ./index.rsh:53:10:function exp)', 'at ./index.rsh:39:84:application call to "runAliceAPI_stillHere0_61" (defined at: ./index.rsh:52:9:function exp)', 'at ./index.rsh:39:84:application call to [unknown function] (defined at: ./index.rsh:39:84:function exp)'],
    msg: 'in',
    who: 'AliceAPI_stillHere'
    });
  const v657 = stdlib.addressEq(v653, v588);
  stdlib.assert(v657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:53:19:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:53:10:application call to [unknown function] (defined at: ./index.rsh:53:10:function exp)', 'at ./index.rsh:53:10:application call to [unknown function] (defined at: ./index.rsh:53:10:function exp)', 'at ./index.rsh:39:84:application call to "runAliceAPI_stillHere0_61" (defined at: ./index.rsh:52:9:function exp)', 'at ./index.rsh:39:84:application call to [unknown function] (defined at: ./index.rsh:39:84:function exp)'],
    msg: null,
    who: 'AliceAPI_stillHere'
    });
  const v661 = ['AliceAPI_stillHere0_61', v655];
  
  const txn1 = await (ctc.sendrecv({
    args: [v588, v589, v590, v591, v617, v618, v627, v661],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v677], secs: v679, time: v678, didSend: v289, from: v676 } = txn1;
      
      switch (v677[0]) {
        case 'AliceAPI_giveBack0_61': {
          const v680 = v677[1];
          
          break;
          }
        case 'AliceAPI_stillHere0_61': {
          const v725 = v677[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AliceAPI_stillHere"
            });
          ;
          const v745 = null;
          const v746 = await txn1.getOutput('AliceAPI_stillHere', 'v745', ctc0, v745);
          
          const v752 = stdlib.add(v678, v589);
          const v1656 = v752;
          const v1657 = v618;
          const v1661 = v627;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Bobs_attach0_61': {
          const v770 = v677[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v677], secs: v679, time: v678, didSend: v289, from: v676 } = txn1;
  switch (v677[0]) {
    case 'AliceAPI_giveBack0_61': {
      const v680 = v677[1];
      return;
      break;
      }
    case 'AliceAPI_stillHere0_61': {
      const v725 = v677[1];
      undefined /* setApiDetails */;
      ;
      const v743 = stdlib.addressEq(v676, v588);
      stdlib.assert(v743, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:56:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:11:function exp)'],
        msg: null,
        who: 'AliceAPI_stillHere'
        });
      const v745 = null;
      const v746 = await txn1.getOutput('AliceAPI_stillHere', 'v745', ctc0, v745);
      if (v289) {
        stdlib.protect(ctc0, await interact.out(v725, v746), {
          at: './index.rsh:52:10:application',
          fs: ['at ./index.rsh:52:10:application call to [unknown function] (defined at: ./index.rsh:52:10:function exp)', 'at ./index.rsh:57:10:application call to "k" (defined at: ./index.rsh:55:11:function exp)', 'at ./index.rsh:55:11:application call to [unknown function] (defined at: ./index.rsh:55:11:function exp)'],
          msg: 'out',
          who: 'AliceAPI_stillHere'
          });
        }
      else {
        }
      
      const v752 = stdlib.add(v678, v589);
      const v1656 = v752;
      const v1657 = v618;
      const v1661 = v627;
      return;
      
      break;
      }
    case 'Bobs_attach0_61': {
      const v770 = v677[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bobs_attach7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_attach7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_attach7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    AliceAPI_giveBack0_61: ctc8,
    AliceAPI_stillHere0_61: ctc8,
    Bobs_attach0_61: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v588, v589, v590, v591, v617, v618, v627] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7]);
  const v639 = ctc.selfAddress();
  const v641 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:43:10:application call to [unknown function] (defined at: ./index.rsh:43:10:function exp)', 'at ./index.rsh:39:84:application call to "runBobs_attach0_61" (defined at: ./index.rsh:42:9:function exp)', 'at ./index.rsh:39:84:application call to [unknown function] (defined at: ./index.rsh:39:84:function exp)'],
    msg: 'in',
    who: 'Bobs_attach'
    });
  const v643 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v639), null);
  let v644;
  switch (v643[0]) {
    case 'None': {
      const v645 = v643[1];
      v644 = false;
      
      break;
      }
    case 'Some': {
      const v646 = v643[1];
      v644 = true;
      
      break;
      }
    }
  const v647 = v644 ? false : true;
  stdlib.assert(v647, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:43:19:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:43:10:application call to [unknown function] (defined at: ./index.rsh:43:10:function exp)', 'at ./index.rsh:43:10:application call to [unknown function] (defined at: ./index.rsh:43:10:function exp)', 'at ./index.rsh:39:84:application call to "runBobs_attach0_61" (defined at: ./index.rsh:42:9:function exp)', 'at ./index.rsh:39:84:application call to [unknown function] (defined at: ./index.rsh:39:84:function exp)'],
    msg: 'duplicate',
    who: 'Bobs_attach'
    });
  const v651 = ['Bobs_attach0_61', v641];
  
  const txn1 = await (ctc.sendrecv({
    args: [v588, v589, v590, v591, v617, v618, v627, v651],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v677], secs: v679, time: v678, didSend: v289, from: v676 } = txn1;
      
      switch (v677[0]) {
        case 'AliceAPI_giveBack0_61': {
          const v680 = v677[1];
          
          break;
          }
        case 'AliceAPI_stillHere0_61': {
          const v725 = v677[1];
          
          break;
          }
        case 'Bobs_attach0_61': {
          const v770 = v677[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bobs_attach"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v676), null);
          await stdlib.simMapSet(sim_r, 0, v676, null);
          const v807 = null;
          const v808 = await txn1.getOutput('Bobs_attach', 'v807', ctc0, v807);
          
          const v813 = stdlib.add(v618, stdlib.checkedBigNumberify('./index.rsh:49:57:decimal', stdlib.UInt_max, '1'));
          const v1840 = v617;
          const v1841 = v813;
          const v1845 = v627;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v677], secs: v679, time: v678, didSend: v289, from: v676 } = txn1;
  switch (v677[0]) {
    case 'AliceAPI_giveBack0_61': {
      const v680 = v677[1];
      return;
      break;
      }
    case 'AliceAPI_stillHere0_61': {
      const v725 = v677[1];
      return;
      break;
      }
    case 'Bobs_attach0_61': {
      const v770 = v677[1];
      undefined /* setApiDetails */;
      ;
      const v800 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v676), null);
      let v801;
      switch (v800[0]) {
        case 'None': {
          const v802 = v800[1];
          v801 = false;
          
          break;
          }
        case 'Some': {
          const v803 = v800[1];
          v801 = true;
          
          break;
          }
        }
      const v804 = v801 ? false : true;
      stdlib.assert(v804, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:46:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:11:function exp)'],
        msg: null,
        who: 'Bobs_attach'
        });
      await stdlib.mapSet(map0, v676, null);
      const v807 = null;
      const v808 = await txn1.getOutput('Bobs_attach', 'v807', ctc0, v807);
      if (v289) {
        stdlib.protect(ctc0, await interact.out(v770, v808), {
          at: './index.rsh:42:10:application',
          fs: ['at ./index.rsh:42:10:application call to [unknown function] (defined at: ./index.rsh:42:10:function exp)', 'at ./index.rsh:48:10:application call to "k" (defined at: ./index.rsh:45:11:function exp)', 'at ./index.rsh:45:11:application call to [unknown function] (defined at: ./index.rsh:45:11:function exp)'],
          msg: 'out',
          who: 'Bobs_attach'
          });
        }
      else {
        }
      
      const v813 = stdlib.add(v618, stdlib.checkedBigNumberify('./index.rsh:49:57:decimal', stdlib.UInt_max, '1'));
      const v1840 = v617;
      const v1841 = v813;
      const v1845 = v627;
      return;
      
      break;
      }
    }
  
  
  };
export async function _Bobs_claim5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_claim5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_claim5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v588, v590, v591, v618, v832, v833, v840] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7]);
  const v853 = ctc.selfAddress();
  const v855 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:84:7:application',
    fs: ['at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:84:7:function exp)'],
    msg: 'in',
    who: 'Bobs_claim'
    });
  
  const v857 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v853), null);
  let v858;
  switch (v857[0]) {
    case 'None': {
      const v859 = v857[1];
      v858 = false;
      
      break;
      }
    case 'Some': {
      const v860 = v857[1];
      v858 = true;
      
      break;
      }
    }
  stdlib.assert(v858, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
    msg: null,
    who: 'Bobs_claim'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v588, v590, v591, v618, v832, v833, v840, v855],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v863], secs: v865, time: v864, didSend: v484, from: v862 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bobs_claim"
        });
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v862), null);
      ;
      const v872 = null;
      const v873 = await txn1.getOutput('Bobs_claim', 'v872', ctc0, v872);
      
      await stdlib.simMapSet(sim_r, 0, v862, undefined /* Nothing */);
      const v878 = stdlib.div(v590, v618);
      const v879 = v840[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0')];
      const v880 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0')];
      const v884 = stdlib.sub(v880, v878);
      const v887 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '1')];
      const v888 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '2')];
      const v889 = [v884, v887, v888];
      const v890 = stdlib.Array_set(v840, stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0'), v889);
      sim_r.txns.push({
        kind: 'from',
        to: v862,
        tok: v591
        });
      const v891 = stdlib.add(v833, stdlib.checkedBigNumberify('./index.rsh:91:23:decimal', stdlib.UInt_max, '1'));
      const v1886 = v891;
      const v1888 = v890;
      const v1889 = stdlib.lt(v891, v618);
      if (v1889) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v588,
          tok: v591
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v591
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v863], secs: v865, time: v864, didSend: v484, from: v862 } = txn1;
  undefined /* setApiDetails */;
  const v867 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v862), null);
  let v868;
  switch (v867[0]) {
    case 'None': {
      const v869 = v867[1];
      v868 = false;
      
      break;
      }
    case 'Some': {
      const v870 = v867[1];
      v868 = true;
      
      break;
      }
    }
  stdlib.assert(v868, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
    msg: null,
    who: 'Bobs_claim'
    });
  ;
  const v872 = null;
  const v873 = await txn1.getOutput('Bobs_claim', 'v872', ctc0, v872);
  stdlib.protect(ctc0, await interact.out(v863, v873), {
    at: './index.rsh:84:7:application',
    fs: ['at ./index.rsh:84:7:application call to [unknown function] (defined at: ./index.rsh:84:7:function exp)', 'at ./index.rsh:86:8:application call to "k" (defined at: ./index.rsh:84:7:function exp)'],
    msg: 'out',
    who: 'Bobs_claim'
    });
  
  await stdlib.mapSet(map0, v862, undefined /* Nothing */);
  const v878 = stdlib.div(v590, v618);
  const v879 = v840[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0')];
  const v880 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0')];
  const v884 = stdlib.sub(v880, v878);
  const v887 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '1')];
  const v888 = v879[stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '2')];
  const v889 = [v884, v887, v888];
  const v890 = stdlib.Array_set(v840, stdlib.checkedBigNumberify('./index.rsh:89:59:application', stdlib.UInt_max, '0'), v889);
  ;
  const v891 = stdlib.add(v833, stdlib.checkedBigNumberify('./index.rsh:91:23:decimal', stdlib.UInt_max, '1'));
  const v1886 = v891;
  const v1888 = v890;
  const v1889 = stdlib.lt(v891, v618);
  if (v1889) {
    return;
    }
  else {
    const v1890 = v890[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
    const v1891 = v1890[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
    const v1892 = stdlib.eq(v1891, v832);
    stdlib.assert(v1892, {
      at: './index.rsh:94:12:application',
      fs: [],
      msg: null,
      who: 'Bobs_claim'
      });
    ;
    return;
    }
  
  
  };
export async function _Bobs_next7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bobs_next7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bobs_next7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v588, v589, v590, v591, v617, v618, v627] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7]);
  const v817 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:71:7:application',
    fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:70:46:application call to [unknown function] (defined at: ./index.rsh:70:46:function exp)'],
    msg: 'in',
    who: 'Bobs_next'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v588, v589, v590, v591, v617, v618, v627, v817],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:71:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v819], secs: v821, time: v820, didSend: v401, from: v818 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bobs_next"
        });
      ;
      const v822 = null;
      const v823 = await txn1.getOutput('Bobs_next', 'v822', ctc0, v822);
      
      const v1894 = v618;
      const v1899 = stdlib.gt(v618, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, '0'));
      if (v1899) {
        const v1902 = stdlib.mod(v590, v618);
        const v1932 = stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0');
        const v1934 = v627;
        const v1935 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0'), v618);
        if (v1935) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v588,
            tok: v591
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v591
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v1930 = v627[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        const v1931 = v1930[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v588,
          tok: v591
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v591
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc3, ctc3, ctc7, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v819], secs: v821, time: v820, didSend: v401, from: v818 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v822 = null;
  const v823 = await txn1.getOutput('Bobs_next', 'v822', ctc0, v822);
  stdlib.protect(ctc0, await interact.out(v819, v823), {
    at: './index.rsh:71:7:application',
    fs: ['at ./index.rsh:71:7:application call to [unknown function] (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:72:8:application call to "k" (defined at: ./index.rsh:71:7:function exp)', 'at ./index.rsh:70:46:application call to [unknown function] (defined at: ./index.rsh:70:46:function exp)'],
    msg: 'out',
    who: 'Bobs_next'
    });
  
  const v1894 = v618;
  const v1899 = stdlib.gt(v618, stdlib.checkedBigNumberify('./index.rsh:76:26:decimal', stdlib.UInt_max, '0'));
  if (v1899) {
    const v1902 = stdlib.mod(v590, v618);
    const v1932 = stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0');
    const v1934 = v627;
    const v1935 = stdlib.lt(stdlib.checkedBigNumberify('./index.rsh:79:17:decimal', stdlib.UInt_max, '0'), v618);
    if (v1935) {
      return;
      }
    else {
      const v1936 = v627[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
      const v1937 = v1936[stdlib.checkedBigNumberify('./index.rsh:94:20:application', stdlib.UInt_max, '0')];
      const v1938 = stdlib.eq(v1937, v1902);
      stdlib.assert(v1938, {
        at: './index.rsh:94:12:application',
        fs: [],
        msg: null,
        who: 'Bobs_next'
        });
      ;
      return;
      }}
  else {
    const v1930 = v627[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    const v1931 = v1930[stdlib.checkedBigNumberify('./index.rsh:98:21:application', stdlib.UInt_max, '0')];
    ;
    return;
    }
  
  
  };
export async function AliceAPI_giveBack(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AliceAPI_giveBack expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AliceAPI_giveBack expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _AliceAPI_giveBack7(ctcTop, interact);}
  };
export async function AliceAPI_stillHere(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AliceAPI_stillHere expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AliceAPI_stillHere expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _AliceAPI_stillHere7(ctcTop, interact);}
  };
export async function Bobs_attach(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_attach expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_attach expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _Bobs_attach7(ctcTop, interact);}
  };
export async function Bobs_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _Bobs_claim5(ctcTop, interact);}
  };
export async function Bobs_next(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bobs_next expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bobs_next expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _Bobs_next7(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`AliceAPI_giveBack()byte[0]`, `AliceAPI_stillHere()byte[0]`, `Bobs_attach()byte[0]`, `Bobs_claim()byte[0]`, `Bobs_next()byte[0]`],
    pure: [],
    sigs: [`AliceAPI_giveBack()byte[0]`, `AliceAPI_stillHere()byte[0]`, `Bobs_attach()byte[0]`, `Bobs_claim()byte[0]`, `Bobs_next()byte[0]`]
    },
  appApproval: `BiASAAEEBTggKDAIB0AC56O2vweK/M/IDKnSu4gOzJfbigMGoI0GJgMBAAABASI1ADEYQQVLKWRJIls1ASEIWzUCMRkjEkEACDEAKChmQgUZNhoAF0lBAGIiNQQjNQZJIQwMQAAySSENDEAAI0khDgxAAA4hDhJEKTX/KDT/UEIAwyENEkQpNf8qNP9QQgC1IQwSRClCAbNJIQ8MQAAIIQ8SRClCADiB9o3s+wISRCk1/4ABAjT/UEIAijYaAhc1BDYaAzYaARdJJAxAAjhJJQxAAXZJIRAMQABpIRASRCEJNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/0k1BTX+gATJ6I0MNP5QsDIGNP8PRIAIAAAAAAAAAzawKTUHNANXACA0AyEFWzQDIQZbNAMhB1s0/zQDIQpbIiIyBjQDV0gRQgLaSCEJNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBVs1/iEGWzX9IQdbNfwhBFs1+yEKWzX6V0gRNflJNQU1+IAEsZkiRTT4ULAyBjT7DEQ0+CJVSSMMQAB/SSELDEAASyELEkQxAIgD7kk19iJVQAAGIjX3QgAGIzX3QgAANPcURDEAKCpmgAgAAAAAAAADJ7ApNQc0/zT+NP00/DT7NPojCCMiMgY0+UICK0gxADT/EkSACAAAAAAAAALpsCk1BzT/NP40/TT8MgY0/gg0+iMiMgY0+UIB/kgxADT/EkSACAAAAAAAAAKysCk1BzT/NP40/TT8NPs0+iIjMgY0+UIB1EglNAESRDQESSISTDQCEhFEKGRJNQNJSiEFWzX/IQZbNf4hB1s1/VdIETX8STUFNfuABNTgGC00+1CwMQCIAxVJNfkiVUAABiI1+kIABiM1+kIAADT6RIAIAAAAAAAAA2iwKTUHMQAoKGY0/zT9CjX5NPxXABE1+LEisgE0+bISJLIQMQCyFDT+shGzNANXACA0/zT+NP00AyEEWzQDIQpbIwgyBjT4Ils0+QkWNPhXCAhQNPhXEAFQQgGwSSMMQAB7IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEGWzX9IQdbNfxXQBE1+4AEmouRdLA0+1cAETX6NP00/IgCbzT/MQASRDT/NP40/TT8NAMhBFs0/ggiIyIyBjT6Ils0/QgWNPpXCAhQNPpXEAFQQgCXSCERiAIfIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEIWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwgRGvSTX8VwARNfshCK80+1cICFA0+1cQAVA1+iERiAHIsSKyASKyEiSyEDIKshQ0/bIRszEANP8WUDT+FlA0/RZQMgYWUDT6UChLAVcAUWdIIzUBMgY1AkIBLzX/Nf41/TX8Nfs1+jX5Nfg19zX2NPxBACw09jT3FlA0+BZQNPkWUDT6FlA0+xZQNP9QKEsBVwBZZ0ghCTUBMgY1AkIA6jT7Ig00/RQQQQAVNPY0+DT5NPs0+DT7GCI0/jT/QgAzsSKyATT/VwARIluyEiSyEDT2shQ0+bIRs7EisgEishIkshAyCbIVMgqyFDT5shGzQgB8Nf81/jX9Nfw1+zX6Nfk1+DT9NPsMQQArNPg0+RZQNPoWUDT7FlA0/BZQNP0WUDT/UChLAVcAWWdIJTUBMgY1AkIAVDT/VwARIls0/BJEsSKyATT8shIkshA0+LIUNPqyEbOxIrIBIrISJLIQMgmyFTIKshQ0+rIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCELMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 89,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v590",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v591",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v590",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v591",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v863",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_AliceAPI_giveBack0_61",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_AliceAPI_stillHere0_61",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_attach0_61",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v677",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v819",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v690",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v745",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v807",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v822",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v872",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "AliceAPI_giveBack",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "AliceAPI_stillHere",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bobs_attach",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bobs_claim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bobs_next",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v863",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_AliceAPI_giveBack0_61",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_AliceAPI_stillHere0_61",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bobs_attach0_61",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v677",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v819",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620027e4380380620027e4833981016040819052620000269162000429565b6000805543600355620000386200024e565b604080513381528351602080830191909152808501518051838501529081015160608301528201516001600160a01b0316608082015290517fdf247b273bc7c85cd9cae926ce7a7f5c203e1e072d08d6697ca73c04346c8d6e9181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f89290620001a1565b60608201526200010b3415600762000224565b62000115620002b5565b338152602080840180515182840152805182015160408085019190915290518101516001600160a01b031660608085019190915243608085018190529085015160a08501526001600081905555516200017191839101620004eb565b6040516020818303038152906040526002908051906020019062000197929190620002ff565b50505050620005df565b620001ab6200038e565b60005b60018110156200020157848160018110620001cd57620001cd620004d5565b6020020151828260018110620001e757620001e7620004d5565b602002015280620001f88162000578565b915050620001ae565b5081818460018110620002185762000218620004d5565b60200201529392505050565b816200024a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002816200038e565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b06200038e565b905290565b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001620002b06200038e565b8280546200030d90620005a2565b90600052602060002090601f0160209004810192826200033157600085556200037c565b82601f106200034c57805160ff19168380011785556200037c565b828001600101855582156200037c579182015b828111156200037c5782518255916020019190600101906200035f565b506200038a929150620003db565b5090565b60405180602001604052806001905b620003c4604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200039d5790505090565b5b808211156200038a5760008155600101620003dc565b604051606081016001600160401b03811182821017156200042357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200043d57600080fd5b604080519081016001600160401b03811182821017156200046e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200048857600080fd5b62000492620003f2565b602085810151825260408601519082015260608501519092506001600160a01b0381168114620004c157600080fd5b604083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316838501526080808601519085015260a08581015161010086019490939291860160005b60018110156200056c57855180518352858101518684015284015115158483015294840194908201906001016200053a565b50505050505092915050565b60006000198214156200059b57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005b757607f821691505b60208210811415620005d957634e487b7160e01b600052602260045260246000fd5b50919050565b6121f580620005ef6000396000f3fe6080604052600436106100bd5760003560e01c8063739e11fc11610079578063a98bf22311610056578063a98bf2231461018d578063ab3bc15a146101a0578063ab53f2c6146101a8578063ea577103146101cb57005b8063739e11fc1461016857806383230757146101705780639b0c65021461018557005b80631e93b0f1146100c65780632c10a159146100ea5780633bc5b7bf146100fd5780633d928df21461012a57806352e7db93146101425780636da017a01461015557005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f836600461198b565b6101d3565b34801561010957600080fd5b5061011d6101183660046119bc565b6101f7565b6040516100e191906119ef565b610132610223565b60405190151581526020016100e1565b6100c4610150366004611a28565b610252565b6100c461016336600461198b565b610272565b610132610292565b34801561017c57600080fd5b506001546100d7565b6101326102c2565b6100c461019b36600461198b565b6102ef565b61013261030f565b3480156101b457600080fd5b506101bd61033f565b6040516100e1929190611a66565b6101326103dc565b6101db61164a565b6101f36101ed36849003840184611b79565b8261040b565b5050565b604080516060810182526000808252602082018190529181019190915261021d82610678565b92915050565b600061022d611678565b60208101516000905261023e61164a565b6102488282610750565b6080015192915050565b61025a61164a565b6101f361026c36849003840184611bcf565b82610940565b61027a61164a565b6101f361028c36849003840184611ce5565b82610750565b600061029c6116a7565b602081015151600190526102ae61164a565b6102b88282610940565b6020015192915050565b60006102cc6116a7565b602081015151600090526102de61164a565b6102e88282610940565b5192915050565b6102f761164a565b6101f361030936849003840184611ce5565b82610e1c565b60006103196116a7565b6020810151516002905261032b61164a565b6103358282610940565b6040015192915050565b60006060600054600280805461035490611d01565b80601f016020809104026020016040519081016040528092919081815260200182805461038090611d01565b80156103cd5780601f106103a2576101008083540402835291602001916103cd565b820191906000526020600020905b8154815290600101906020018083116103b057829003601f168201915b50505050509050915091509091565b60006103e6611678565b6020810151600090526103f761164a565b6104018282610e1c565b6060015192915050565b61041b600160005414600b61111f565b815161043690158061042f57508251600154145b600c61111f565b60008080556002805461044890611d01565b80601f016020809104026020016040519081016040528092919081815260200182805461047490611d01565b80156104c15780601f10610496576101008083540402835291602001916104c1565b820191906000526020600020905b8154815290600101906020018083116104a457829003601f168201915b50505050508060200190518101906104d99190611dbf565b905061050260408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16105553415600861111f565b604082015160a0830151515161056b9190611e7d565b81515260a0820180515160209081015183519091015251516040908101518251901515908201526060830151908301516105b2916105ab91339190611145565b600961111f565b81516105ca906001600160a01b03163314600a61111f565b6105d26116e7565b825181516001600160a01b039182169052602080850180518451909201919091526040808601518451909101526060808601518451931692019190915251608084015161061f9190611e7d565b602080830180519290925281516000910181905281516001604090910152815160600181905290514360809091015260a0840151835161065f929061115d565b602082015160a00152610671816111d1565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156106c4576106c46119d9565b1415610741576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610705576107056119d9565b6001811115610716576107166119d9565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610760600760005414601c61111f565b815161077b90158061077457508251600154145b601d61111f565b60008080556002805461078d90611d01565b80601f01602080910402602001604051908101604052809291908181526020018280546107b990611d01565b80156108065780601f106107db57610100808354040283529160200191610806565b820191906000526020600020905b8154815290600101906020018083116107e957829003601f168201915b505050505080602001905181019061081e9190611e95565b90506108328160800151431015601e61111f565b7f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3384604051610863929190611f15565b60405180910390a16108773415601b61111f565b604051600081527f6463d9cc07b67c89d37db4bf8b2f850af95911711e76377b61791734a609f7639060200160405180910390a1600060808301526108ba6116e7565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169381019390935260808086015183860180519190915260a08088015182519095019490945280516000930183905280519094019190915282514391015260c08401519151015261093a816111d1565b50505050565b610950600760005414601861111f565b815161096b90158061096457508251600154145b601961111f565b60008080556002805461097d90611d01565b80601f01602080910402602001604051908101604052809291908181526020018280546109a990611d01565b80156109f65780601f106109cb576101008083540402835291602001916109f6565b820191906000526020600020905b8154815290600101906020018083116109d957829003601f168201915b5050505050806020019051810190610a0e9190611e95565b604080516020810190915260008152909150610a3182608001514310601a61111f565b7f42b5c227c490e78aadc358acd736cdef3f6d2e90186fff0d0636f2e3f06dee233385604051610a62929190611f3f565b60405180910390a16000602085015151516002811115610a8457610a846119d9565b1415610b7957610a963415601261111f565b8151610aae906001600160a01b03163314601361111f565b604051600081527fa38b52b4112b24cd7a7d882f0cbaa49ae74f7640a90ea44c839361aeb564eec29060200160405180910390a160008352610aee6116e7565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935260808087015183860180519190915260a080890151825190950194909452805160009301929092528151600194019390935280514393019290925260c085015191510152610b73816111d1565b5061093a565b6001602085015151516002811115610b9357610b936119d9565b1415610c9257610ba53415601461111f565b8151610bbd906001600160a01b03163314601561111f565b604051600081527f767ce9b34de21645ae43310aa2757e880cbd237b60ec5afe48571283516e2f049060200160405180910390a160006020840152610c006116e7565b825181516001600160a01b039182169052602080850180518451909201919091526040808601518451909101526060808601518451931692019190915251610c489043611e7d565b602080830180519290925260a08086015183519092019190915281516001604090910152815160006060909101528151436080919091015260c085015191510152610b73816111d1565b6002602085015151516002811115610cac57610cac6119d9565b141561093a57610cbe3415601661111f565b6000610cc933610678565b516001811115610cdb57610cdb6119d9565b1415610cea5760008152610d12565b6001610cf533610678565b516001811115610d0757610d076119d9565b1415610d1257600181525b8051610d2d90610d23576001610d26565b60005b601761111f565b336000908152600460209081526040808320805462ff00ff19166001179055519182527f40cf00014c0befc7ed5520b8bb0d8b21235632454821aae01470fb6366c0e636910160405180910390a160006040840152610d8a6116e7565b825181516001600160a01b0391821690526020808501518351820152604080860151845190910152606080860151845193169201919091526080840151908201515260a0830151610ddd90600190611e7d565b6020808301805190910191909152805160016040909101528051600060609091015280514360809091015260c0840151905160a00152610b73816111d1565b610e2c600560005414601061111f565b8151610e47901580610e4057508251600154145b601161111f565b600080805560028054610e5990611d01565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8590611d01565b8015610ed25780601f10610ea757610100808354040283529160200191610ed2565b820191906000526020600020905b815481529060010190602001808311610eb557829003601f168201915b5050505050806020019051810190610eea9190611fa5565b9050610f2260408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943385604051610f53929190611f15565b60405180910390a16000610f6633610678565b516001811115610f7857610f786119d9565b1415610f875760008152610faf565b6001610f9233610678565b516001811115610fa457610fa46119d9565b1415610faf57600181525b8051610fbc90600e61111f565b610fc83415600f61111f565b604051600081527fceda1ea86efecdc1bac729f19bb4cc645703d5bae7184b1ac50c555ea44d7fcd9060200160405180910390a160006060808501829052338252600460209081526040909220805462ffffff1916905583015190830151611030919061202d565b6020820181905260c083015151516110489190612041565b604082810180519290925260c0840180515160209081015184518201529051518201519251921515928201929092528301519082015161108a91903390611392565b61109261171e565b825181516001600160a01b0391821690526020808501518351909101526040808501518351921691015260608084015182519091015260808084015182519091015260a08301516110e590600190611e7d565b602080830180519290925290514391015260c0830151604083015161110d919060009061115d565b602082015160400152610671816113a6565b816101f35760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061115383853085611464565b90505b9392505050565b61116561175c565b60005b60018110156111b15784816001811061118357611183611e51565b602002015182826001811061119a5761119a611e51565b6020020152806111a981612058565b915050611168565b50818184600181106111c5576111c5611e51565b60200201529392505050565b80602001516040015115611283576111e76117a7565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151909316928401929092528084018051516080850152805182015160a0808601919091529051015160c0840152600760005543600155905161125a918391016120b1565b6040516020818303038152906040526002908051906020019061127e9291906117f6565b505050565b60008160200151602001511161129a5760006112b1565b8060200151606001516112ae5760016112b1565b60005b1561135a576112be61171e565b81515181516001600160a01b0391821690528251604090810151835160209081019190915284516060908101518551941693830193909352808501805182015185519094019390935291519091015183519091015161131d9190612115565b81516080908101919091526020808301805160009052848201805190930151815190920191909152905160a001519051604001526101f3816113a6565b805160608101519051602083015160a001515151611379929190611392565b6000808055600181905561138f9060029061187a565b50565b61139d83838361153e565b61127e57600080fd5b805160600151602082015151101561142e576113c06118b4565b8151516001600160a01b03908116825282516020908101518184015283516040908101519092168284015283516060908101519084015283516080908101519084015280840180515160a08501525182015160c0840152600560005543600155905161125a91839101612129565b805160800151602082015160400151515161144b9114600d61111f565b8051604081015181516080909201516113799290611392565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916114cb91612186565b60006040518083038185875af1925050503d8060008114611508576040519150601f19603f3d011682016040523d82523d6000602084013e61150d565b606091505b509150915061151e8282600161160f565b508080602001905181019061153391906121a2565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161159d91612186565b60006040518083038185875af1925050503d80600081146115da576040519150601f19603f3d011682016040523d82523d6000602084013e6115df565b606091505b50915091506115f08282600261160f565b508080602001905181019061160591906121a2565b9695505050505050565b6060831561161e575081611156565b82511561162e5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161113c565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6040518060400160405280600081526020016116a260405180602001604052806000151581525090565b905290565b6040518060400160405280600081526020016116a26040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908152602081016116a2611903565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908152602081016116a261193d565b60405180602001604052806001905b611791604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161176b5790505090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016116a261175c565b82805461180290611d01565b90600052602060002090601f016020900481019282611824576000855561186a565b82601f1061183d57805160ff191683800117855561186a565b8280016001018555821561186a579182015b8281111561186a57825182559160200191906001019061184f565b5061187692915061195e565b5090565b50805461188690611d01565b6000825580601f10611896575050565b601f01602090049060005260206000209081019061138f919061195e565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016116a261175c565b6040518060c001604052806000815260200160008152602001600015158152602001600015158152602001600081526020016116a261175c565b604051806060016040528060008152602001600081526020016116a261175c565b5b80821115611876576000815560010161195f565b60006040828403121561198557600080fd5b50919050565b60006040828403121561199d57600080fd5b6111568383611973565b6001600160a01b038116811461138f57600080fd5b6000602082840312156119ce57600080fd5b8135611156816119a7565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611a0657611a066119d9565b8083525060208301511515602083015260408301511515604083015292915050565b600060a0828403121561198557600080fd5b60005b83811015611a55578181015183820152602001611a3d565b8381111561093a5750506000910152565b8281526040602082015260008251806040840152611a8b816060850160208701611a3a565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611ad957611ad9611aa0565b60405290565b6040516020810167ffffffffffffffff81118282101715611ad957611ad9611aa0565b6040516080810167ffffffffffffffff81118282101715611ad957611ad9611aa0565b6040516060810167ffffffffffffffff81118282101715611ad957611ad9611aa0565b60405160e0810167ffffffffffffffff81118282101715611ad957611ad9611aa0565b801515811461138f57600080fd5b600060408284031215611b8b57600080fd5b6040516040810181811067ffffffffffffffff82111715611bae57611bae611aa0565b604052823581526020830135611bc381611b6b565b60208201529392505050565b600081830360a0811215611be257600080fd5b611bea611ab6565b833581526080601f1983011215611c0057600080fd5b611c08611adf565b9150611c12611b02565b602085013560038110611c2457600080fd5b81526040850135611c3481611b6b565b60208201526060850135611c4781611b6b565b60408201526080850135611c5a81611b6b565b6060820152825260208101919091529392505050565b60008183036040811215611c8357600080fd5b611c8b611ab6565b8335815291506020601f1982011215611ca357600080fd5b506040516020810181811067ffffffffffffffff82111715611cc757611cc7611aa0565b6040526020830135611cd881611b6b565b8152602082015292915050565b600060408284031215611cf757600080fd5b6111568383611c70565b600181811c90821680611d1557607f821691505b6020821081141561198557634e487b7160e01b600052602260045260246000fd5b600082601f830112611d4757600080fd5b611d4f611adf565b80606080850186811115611d6257600080fd5b855b81811015611db357828189031215611d7c5760008081fd5b611d84611b25565b8151815260208083015181830152604080840151611da181611b6b565b90830152908652909401938201611d64565b50919695505050505050565b60006101008284031215611dd257600080fd5b60405160c0810181811067ffffffffffffffff82111715611df557611df5611aa0565b6040528251611e03816119a7565b8082525060208301516020820152604083015160408201526060830151611e29816119a7565b606082015260808381015190820152611e458460a08501611d36565b60a08201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611e9057611e90611e67565b500190565b60006101208284031215611ea857600080fd5b611eb0611b48565b8251611ebb816119a7565b8082525060208301516020820152604083015160408201526060830151611ee1816119a7565b806060830152506080830151608082015260a083015160a0820152611f098460c08501611d36565b60c08201529392505050565b6001600160a01b038316815260608101611156602083018480518252602090810151511515910152565b6001600160a01b0383168152815160208083019190915282015151805160c08301919060038110611f7257611f726119d9565b806040850152506020810151151560608401526040810151151560808401526060810151151560a0840152509392505050565b60006101208284031215611fb857600080fd5b611fc0611b48565b8251611fcb816119a7565b8152602083810151908201526040830151611fe5816119a7565b80604083015250606083015160608201526080830151608082015260a083015160a0820152611f098460c08501611d36565b634e487b7160e01b600052601260045260246000fd5b60008261203c5761203c612017565b500490565b60008282101561205357612053611e67565b500390565b600060001982141561206c5761206c611e67565b5060010190565b8060005b600181101561093a578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612077565b60006101208201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015161210e60c0840182612073565b5092915050565b60008261212457612124612017565b500690565b60006101208201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015161210e60c0840182612073565b60008251612198818460208701611a3a565b9190910192915050565b6000602082840312156121b457600080fd5b815161115681611b6b56fea26469706673582212206fb1b0e11cb355fd7281cffdfbd81e07bfd3a70d618cd1ae287089dd7ff8bbfc64736f6c634300080c0033`,
  BytecodeLen: 10212,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:101:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:82:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:101:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:39:84:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "AliceAPI_giveBack": AliceAPI_giveBack,
  "AliceAPI_stillHere": AliceAPI_stillHere,
  "Bobs_attach": Bobs_attach,
  "Bobs_claim": Bobs_claim,
  "Bobs_next": Bobs_next
  };
export const _APIs = {
  AliceAPI: {
    giveBack: AliceAPI_giveBack,
    stillHere: AliceAPI_stillHere
    },
  Bobs: {
    attach: Bobs_attach,
    claim: Bobs_claim,
    next: Bobs_next
    }
  };
