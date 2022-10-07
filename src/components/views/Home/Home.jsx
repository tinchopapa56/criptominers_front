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
import {
  ETERNAL_ADDRESS,
  ETERNAL_ABI
} from "../../../constants/index"

function Home() {
  const zero = ethers.BigNumber.from(0);
  const [walletConected, setWalletConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState(zero);
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
      getEthBalance();
    }
  },[walletConected])

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

  const connectWallet = async ()=>{
    try{
      await getProviderOrSigner();
      setWalletConnected(true);
    }catch(err){
      console.error(err);
    }
  }
  /*END m Connection*/

  const getEthBalance = async()=>{
    try{
      //get balance metamask
      const provider = await getProviderOrSigner(true); // provider == metamask
      const eternalContract = new ethers.Contract(ETERNAL_ADDRESS, ETERNAL_ABI, provider) //contract instance [para tener acceso a sus funciones]

      const address = await provider.getAddress();
      const balance = await eternalContract.balanceOf(address);
      setEthBalance(balance);
    }catch(err){
      console.error(err);
      setEthBalance(zero);
    }
  } 


  return (
    <div className="home">
        <Navbar tokenBalance={ethBalance} />
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