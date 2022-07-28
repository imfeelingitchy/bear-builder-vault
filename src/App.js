import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_WalletConnect } from "@reach-sh/stdlib"
import * as backend from './build/index.main.mjs';
import { useState } from "react";

const stdlib = loadStdlib("ALGO")
let acc

function App() {

  const connectWallet = async () => {
    stdlib.setWalletFallback(stdlib.walletFallback(
      {
          providerEnv: {
              ALGO_TOKEN: '',
              ALGO_SERVER: "https://testnet-api.algonode.cloud",
              ALGO_PORT: '',
              ALGO_INDEXER_TOKEN: '',
              ALGO_INDEXER_SERVER: "https://testnet-idx.algonode.cloud",
              ALGO_INDEXER_PORT: '',
          },
          WalletConnect: ALGO_WalletConnect,
      }
    ))
    acc = await stdlib.getDefaultAccount()
    setView(1)
    setStatus("")
  }

  const newContract = async () => {
    const tok = parseInt(window.prompt("Enter the Asset ID of the token you want to deposit."))
    const quantity = parseInt(window.prompt("How many will you deposit?"))
    const deadline = parseInt(window.prompt("How much time (in network blocks) will you give yourself to check in regularly?"))
    setStatus("Please sign the transaction to deploy the contract.")
    const aliceCtc = acc.contract(backend)
    await stdlib.withDisconnect(() =>
        aliceCtc.p.Alice({
            ready: stdlib.disconnect,
            fortuneType: tok,
            fortune: quantity,
            deadlineIncrement: deadline
        })
    )
    const ctcID = parseInt((await aliceCtc.getInfo())._hex, 16)
    setStatus("The contract is deployed as: " + ctcID)
  }


  const attach = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("New claimant: Please sign the transaction.")
    try {
      await ctc.apis.Bobs.attach()
      setStatus("Success! You may claim your funds if the Deployer ever fails to check in.")
    } catch (e) {
      const errMsg = JSON.stringify(e.message)
      if (errMsg.includes("duplicate")) {
        setStatus("Error: You have already staked your claim.")
      } else {
        setStatus("Error: You may not send a claim at this time.")
      }
    }
  }

  const claim = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("Please sign the transaction.")
    try {
      try {
        await ctc.apis.Bobs.next()
      } catch {}
      await ctc.apis.Bobs.claim()
      setStatus("Success! The tokens are sent to your wallet.")
    } catch (e) {
      console.log(e)
      setStatus("Error: You may not withdraw at this time.")
    }
  }

  const giveBack = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("Please sign the transaction.")
    try {
      await ctc.apis.AliceAPI.giveBack()
      setStatus("Success! Your funds are returned.")
    } catch {
      setStatus("You may not claim your funds at this time.")
    }
  }

  const stillHere = async () => {
    const ctcInfo = Number(window.prompt("Enter the contract ID below:"))
    const ctc = acc.contract(backend, ctcInfo)
    setStatus("Please sign the transaction.")
    try {
      await ctc.apis.AliceAPI.stillHere()
      setStatus("Noted.")
    } catch {
      setStatus("An error occured.")
    }
  }

  const reload = () => {
    localStorage.clear()
    window.location.reload()
  }

  const [view, setView] = useState(0)
  const [status, setStatus] = useState("Please connect your wallet.")

  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      {
        (view === 0) &&
        <button className="button-1" onClick={connectWallet}>Connect Wallet</button>
      }
      {
        (view === 1) &&
        <div style={{display: "flex"}}>
          <button className="button-2" onClick={() => setView(2)}>Deployer Options</button>
          <button className="button-2" onClick={() => setView(3)}>Attacher Options</button>
        </div>
      }
      {
        (view === 2) &&
        <div style={{display: "flex"}}>
          <button className="button-2" onClick={newContract}>Deploy New Contract and Deposit Fortune</button>
          <button className="button-2" onClick={stillHere}>I'm still here!</button>
          <button className="button-2" onClick={giveBack}>Forget this, I want my money back!</button>
          <button className="button-2" onClick={reload}>Disconnect Wallet</button>
        </div>
      }
      {
        (view === 3) &&
        <div style={{display: "flex"}}>
          <button className="button-2" onClick={attach}>Stake Claim</button>
          <button className="button-2" onClick={claim}>Withdraw Your Share</button>
          <button className="button-2" onClick={reload}>Disconnect Wallet</button>
        </div>
      }
      <h1>{status}</h1>
    </div>
  );
}

export default App;
