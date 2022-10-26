import React from 'react'
import Logo from "../../svgs/logo.svg"
import "./Navbar.css"
import Address from "../../svgs/address.svg"
import Arrow from "../../svgs/arrow.svg"
import Play from "../../svgs/play.svg"
import Fleet from "../../svgs/fleet.svg"
import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"

import { ethers } from 'ethers'

export default function Navbar(props) {
  const notBigNumber= ethers.utils.formatEther(props.tokenBalance);
  const eternal = Math.floor(notBigNumber);


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
            <p>Claim {props.unclaimedBalance ? props.unclaimedBalance : "0" } $ETERNAL</p>
          </button>
          <div className='last__div'>
            <img src="https://legacy.cryptomines.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feternal-logo.ff860841.png&w=32&q=75"/>
            <div>
              <h4>{eternal ? (eternal + "$ETL"):("0 $ETL")}</h4>
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
