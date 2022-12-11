import React, {createContext, useContext,
    useEffect, useRef, useState} from "react"
    import Web3Modal from "web3modal";
    import {ethers} from "ethers";
    import {useNavigate} from "react-router-dom"
    
import {  ETERNAL_ADDRESS, ETERNAL_ABI, SOLDIERS_ABI, SOLDIERS_ADDRESS} from "../constants/index"
    // import { createEventListeners } from "./createEventListeners";
    // import { battlegrounds } from "../assets";
    // import { GetParams } from "../utils/onboard";
    
    const GlobalContext = createContext();
    
  export const GlobalContextProvider = ({children}) =>{
    const [walletAddress, setWalletAddress] = useState('');
    const [soldiersContract, setSoldiersContract] = useState(null);
    const [eternalContract, setEternalContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [eternalBalance, setEternalBalance] = useState(0)
    // const [step, setStep] = useState(1)

  useEffect(() => {
      const setSmartContractAndProvider = async () => {
          const web3Modal = new Web3Modal();
          const connection = await web3Modal.connect();
          const web3Provider = new ethers.providers.Web3Provider(connection);
            const {chainId} = await web3Provider.getNetwork();
            if(chainId !== 5) {
              alert("Change metamask to Goerli");
              throw new Error("Change metamask to Goerli")
            }
          const signer = web3Provider.getSigner();
          const wAddress = await signer.getAddress();
          // const contract = new ethers.Contract(ADDRESS, ABI, signer);
          const sContract = new ethers.Contract(SOLDIERS_ADDRESS, SOLDIERS_ABI, signer);
          const eContract = new ethers.Contract(ETERNAL_ADDRESS, ETERNAL_ABI, signer);
          setProvider(web3Provider);
          setSoldiersContract(sContract);
          setEternalContract(eContract);
          setWalletAddress(wAddress);
      };
      setSmartContractAndProvider();
      // const timer = setTimeout(() => setSmartContractAndProvider(), [1000]);
      // return () => clearTimeout(timer);
  }, []);

      return (
          <GlobalContext.Provider value={{
            soldiersContract, eternalContract,
            walletAddress, provider, eternalBalance,
          }}>
              {children}
          </GlobalContext.Provider>
      )
    } 
    
  export const useGlobalContext = () => useContext(GlobalContext);


      // / *SET event listeners */
      // useEffect(()=>{
      //   if(step !== -1 && contract) {
      //     createEventListeners({
      //       contract, provider, walletAddress,
      //       setShowAlert, setUpdateGameData, navigate,
      //       player1Ref, player2Ref
      //     })
      //   }
      // },[contract, step])
    
     //* Set the game data to the state
    //  useEffect(() => {
    //   const fetchGameData = async () => {
    //       const fetchedBattles = await contract.getAllBattles();
    //       const pendingBattles = fetchedBattles.filter((battle) => battle.battleStatus === 0);
    //       let activeBattle = undefined;
    
    //       fetchedBattles.forEach((battle) => {
    //         if (battle.players.find((player) => player.toLowerCase() === walletAddress.toLowerCase())) {
    //           if (battle.winner.startsWith('0x00')) {
    //             activeBattle = battle;
    //           }
    //         }
    //       })
    
    //       setGameData({ players:[], pendingBattles: pendingBattles.slice(1), activeBattle });
    //   };
    
    //   if(contract) fetchGameData();
    // }, [contract, updateGameData]);

    // useEffect(()=>{
    //     const battlegroundFromLocalS = localStorage.getItem("battleground");
    
    //     if(battlegroundFromLocalS) {
    //       setBattleGround(battlegroundFromLocalS);
    //     } else {
    //       localStorage.setItem("battleground", battleGround)
    //     }
    
    //   },[])