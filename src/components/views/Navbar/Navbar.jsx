import React, {useState} from 'react'
import Logo from "../../svgs/logo.svg"
import "./Navbar.css"
import Address from "../../svgs/address.svg"
import Arrow from "../../svgs/arrow.svg"
import Play from "../../svgs/play.svg"
import Fleet from "../../svgs/fleet.svg"
import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"

import { ethers } from 'ethers'
import { useGlobalContext } from '../../../context/context'
import { useEffect } from 'react'

// export default function Navbar(props) {
export default function Navbar() {

  const {eternalContract, walletAddress} = useGlobalContext();
  const [ethBalance, setEthBalance] = useState(0);
  const [unclaimedB, setUnclaimedB] = useState(null);

  useEffect(()=>{
    const getEthBalance = async() => {
        const balanceBIG = await eternalContract.balanceOf(walletAddress);
        const balanceJS = parseInt(balanceBIG.toString());
        setEthBalance(balanceJS);
    } 
    if(eternalContract)getEthBalance();
  }, [eternalContract])

  return (
    <div className='navbar'>
        
        <div>
          {/* <img id="logo" src={Logo} /> */}
          <button>
              <img src={Play} alt=""/>
          </button>
          <button>
            <img src={Fleet} alt="" /> 
            <p>Create Fleet</p>
          </button>
        </div>
        
        <div>
          <button>Stake $ETERNAL</button>
          <button>
            <img src={Arrow} alt=""/>
            <p>Claim {unclaimedB ? unclaimedB : "0" } $ETERNAL</p>
          </button>
          <div className='last__div'>
            <img src="https://legacy.cryptomines.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feternal-logo.ff860841.png&w=32&q=75"/>
            <div>
              <h4>{ethBalance ? (ethBalance + "$ETL"):("0 $ETL")}</h4>
              <button>
                <img src={Address} alt=""/>
                <p>...</p>
              </button>
            </div>
          </div>
        </div>

    </div>
  )
}
