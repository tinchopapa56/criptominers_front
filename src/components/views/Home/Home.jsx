import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import "./Home.css"

import Web3Modal from "web3modal";
// import {Contract, providers, utils} from "ethers";
import {ethers} from "ethers";
import {useRef,useState,useEffect} from "react";
// const {ethers} = require("ethers")

function Home() {

  const [walletConected, setWalletConnected] = useState(false);
  
  const web3ModalRef = useRef();


  /*Metamask connection*/
  useEffect(() => {
    if(!walletConected) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  },[walletConected])

  const getProviderOrSigner = async (needSigner = false)=>{
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

  const connectWallet = async ()=>{
    try{
      await getProviderOrSigner();
      setWalletConnected(true);
    }catch(err){
      console.error(err);
    }
  }
  /*END*/




  return (
    <div className="home">
        <Navbar />
        <div className="home-container">
          <Sidebar />
          <div className="content-container">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Home