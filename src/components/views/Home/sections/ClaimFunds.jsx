import React, {useRef, useState} from 'react'
import {ETERNAL_ADDRESS, ETERNAL_ABI} from "../../../../constants/index"
import {ethers} from "ethers";
import Web3Modal from "web3modal";
import { useEffect } from 'react';

import "../Home.css"




function ClaimFunds() {
  const [loading, setLoading] = useState(false);
  const [eternalBalance, setEternalBalance] = useState(0);
  const web3ModalRef = useRef();
  
  useEffect(()=>{
    web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
    })
    console.log("effect ejecutado: se creo Web3modal{}");
    getEternalBalance();
  },[])

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new ethers.providers.Web3Provider(provider);

    const {chainId} = await web3Provider.getNetwork();
    if(chainId !== 5) {
      alert("Change metamask to Goerli");
      throw new Error("Change metamask to Goerli")
    }
    if(needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider; //METAMASK connection-ref
  }
  const claimFREETokens = async ()=>{
    const signer = await getProviderOrSigner(true);
    const eternalToken= new ethers.Contract(ETERNAL_ADDRESS, ETERNAL_ABI, signer);

    const claimFREE = await eternalToken.claimFree1k();
      setLoading(true);
      await claimFREE.wait();
      setLoading(false)
    window.alert("se claimearon bien");

    //get balance
    const address = await signer.getAddress();
    const _BIGeternalBalance = await eternalToken.balanceOf(address);
    const _eternalBalance = ethers.utils.formatEther(_BIGeternalBalance);

    setLoading(true);
    setEternalBalance( Math.floor(_eternalBalance) );
    setLoading(false);
  }
  const getEternalBalance = async()=>{
    const signer = await getProviderOrSigner(true);
    const eternalContract = new ethers.Contract(ETERNAL_ADDRESS, ETERNAL_ABI, signer);
    const address = await signer.getAddress();
    const _BIGeternalBalance = await eternalContract.balanceOf(address);
    const _eternalBalance = ethers.utils.formatEther(_BIGeternalBalance)
    setLoading(true);
    setEternalBalance(Math.floor(_eternalBalance));
    setLoading(false);
  }

  return (
    <div className="claimFunds">
      <h1>Claim funds to try the app</h1>
      <button onClick={()=>{claimFREETokens()}}>CLAIM TOKENS</button>

      <h2>Tenes {loading ? ("loading papa") : (eternalBalance)} eternals</h2>
    </div>
  )
}

export default ClaimFunds