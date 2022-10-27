import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import "./Home.css"

import Web3Modal from "web3modal";
// import {Contract, providers, utils} from "ethers";
import {ethers} from "ethers";
import {useRef,useState,useEffect} from "react";
import {  ETERNAL_ADDRESS, ETERNAL_ABI, SOLDIERS_ABI, SOLDIERS_ADDRESS} from "../../../constants/index"



function Home() {

  const zero = ethers.BigNumber.from(0);
  const [walletConected, setWalletConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState(zero);
  const [SoldiersNFTContract, setSoldiersNFTContract] = useState("SIMPLE STRING TO TRY PASSING")
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
      getContracts();
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
  const getContracts = async() =>{
    try{
      const provider = await getProviderOrSigner(true);
      const soldiersContract = new ethers.Contract(SOLDIERS_ADDRESS, SOLDIERS_ABI, provider)
      
      setSoldiersNFTContract(soldiersContract);
    }catch(err){
      console.error(err);
      setSoldiersNFTContract({standard:"bien pa"});
    }
    
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
        <Sidebar />
        <div className="home-container">
          <Navbar tokenBalance={ethBalance} />
          <div className="content-container">
            <Outlet context={[SoldiersNFTContract, setSoldiersNFTContract]} />
          </div>
        </div>
    </div>
  )
}

export default Home