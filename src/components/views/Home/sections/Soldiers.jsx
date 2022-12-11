import React, {useState} from 'react'
import BlockInfo from "../BlockInfo/BlockInfo"
import NftCard from '../NftCard/NftCard';
import "../Home.css"
import { ethers } from 'ethers';

import {uploadJSON} from "../../../pinata/Pinata"
import axios from 'axios';
import { useEffect } from 'react';
import { useGlobalContext } from '../../../../context/context';

/* Ya funcona el mint, genial */
// Ahora, como hago con el soldierContract.balanceOf()
// en el front: 
// Y consiog el array para mapear cada nft y su metadata 

function Soldiers() {

  const {soldiersContract, walletAddress} = useGlobalContext();

  const [workers, setWorkers] = useState([{
    name: "HARDLytton Notley",
    uuid: "0x122197sabdaskbdai7g9obauewgf79abwfoafg9awbfd1",
    level: "3",
    img: "https://assets.weforum.org/article/image/responsive_big_webp_q8bpN98uMnTEXttXMZCBU8X0kmDdUSHvsmA9JO18-hs.webp",
    power: "140"
  },{
    name: "HARDMark Ruffalo",
    uuid: "0x122197d453253252355325351",
    level: "3",
    img: "https://assets.weforum.org/article/image/responsive_big_webp_q8bpN98uMnTEXttXMZCBU8X0kmDdUSHvsmA9JO18-hs.webp",
    power: "129"
  }]);
  // const [soldiersContract, setSoldiersContract] = useOutletContext(soldiersContract);
  const [soldierNFTs, setSoldierNFTs] = useState([])
  // const [data, setData] = useOutletContext()

  const getSoldiers = async()=>{
    console.log(soldiersContract)
    const soldiers = await soldiersContract.getMyNfts();
    console.log(soldiers)
    let myNFTs = await Promise.all(
      soldiers.map(async (eachToken)=>{
        const tokenURI = await soldiersContract.tokenURI(eachToken);
        let metadata = await axios.get(tokenURI);
        console.log(metadata);
        // return {
        //   id: i,

        // }
      })
    )
    return myNFTs
    // setSoldierNFTs(soldiers);
  }
  const uploadMetadataToIPFS = async() => {
    try {
      const res = await uploadJSON();
      if(res.success === true){
        console.log("Uploaded JSON to Pinata: ", res)
        return res.pinataURL;
      }
    } catch(e) { console.log("error uploading JSON metadata:", e) }
  }
  const mint = async()=>{
    console.log(soldiersContract)

    /*uploads the metadata to IPFS*/
    const tokenURI = uploadMetadataToIPFS();

    /*Soldier contract CONSUMPTION*/
    const mintResult = await soldiersContract.mint(tokenURI);
    const tokenCountBIG = await soldiersContract.tokenCount();
    const tokenCountFORMAT = parseInt(tokenCountBIG.toString());
    await mintResult.wait()

    console.log("termino el minting");
    console.log(tokenCountFORMAT);
    //FALTA
  }

  useEffect(() => {
    if(soldiersContract) getSoldiers();
  }, [soldiersContract])

  return (
    <div className='soldiers'>
      <div>
        <button></button>
        <div className="blockInfo">
          <p>Mint worker</p>
          <button onClick={()=>mint()}>MINT QUANTITY</button>
        </div>
        <BlockInfo text="Current Workers" />
        <BlockInfo text="Mining Power" />
      </div>

      <div className='soldiers__middle'>
        <div>
          <p>Filter by Worker Rarity:</p>
          <p>cosito de paginacion</p>
        </div>
        <p>Lupita con Debounce</p>
      </div>

      <section>
        {!workers ? ("No workers ") : (
          workers.map((worker, i)=>{
            return <NftCard 
              key={i}
              name={worker.name}
              uuid={worker.uuid}
              rarity={worker.rarity} //SEGUN EL RARITY, le pongo 1 de las 3 fotos
              // img={worker.img}  
              power={worker.power}
            />
          })
        )}
      </section>
    </div>
  )
}

export default Soldiers