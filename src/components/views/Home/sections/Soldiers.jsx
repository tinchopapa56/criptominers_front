import React, {useState} from 'react'
import BlockInfo from "../BlockInfo/BlockInfo"
import NftCard from '../NftCard/NftCard';
import "../Home.css"
import { ethers } from 'ethers';
import { useOutletContext } from "react-router-dom";


function Soldiers() {

  const [workers, setWorkers] = useState([{
    name: "Lytton Notley",
    uuid: "0x122197sabdaskbdai7g9obauewgf79abwfoafg9awbfd1",
    level: "3",
    img: "https://assets.weforum.org/article/image/responsive_big_webp_q8bpN98uMnTEXttXMZCBU8X0kmDdUSHvsmA9JO18-hs.webp",
    power: "140"
  },{
    name: "Mark Ruffalo",
    uuid: "0x122197d453253252355325351",
    level: "3",
    img: "https://assets.weforum.org/article/image/responsive_big_webp_q8bpN98uMnTEXttXMZCBU8X0kmDdUSHvsmA9JO18-hs.webp",
    power: "129"
  }]);
  const [soldierContract, setSoldierContract] = useOutletContext();;
  const [soldierNFTs, setSoldierNFTs] = useState([])

  // const getSoldiers = async()=>{
  //   const soldiers = soldierContract.getTheNFTS();
  //   //FALTA ESE METODO
  //   setSoldierNFTs(soldiers);
  // }
  const mint = async()=>{
    // const mintResult = await soldierContract.mint();
    alert(soldierContract)
    console.log(soldierContract)
    //FALTA
  }

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
              level={worker.level}
              img={worker.img} 
              power={worker.power}
            />
          })
        )}
      </section>
    </div>
  )
}

export default Soldiers