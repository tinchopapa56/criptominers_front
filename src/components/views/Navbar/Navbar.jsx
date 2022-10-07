import React from 'react'
import Logo from "../../svgs/logo.svg"
import "./Navbar.css"
import Address from "../../svgs/address.svg"
import Arrow from "../../svgs/arrow.svg"
import Play from "../../svgs/play.svg"
import Fleet from "../../svgs/fleet.svg"
import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"


export default function Navbar(props) {
  return (
    <div className='navbar'>
        
        <div>
          <img id="logo" src={Logo} />
          <button>
            <img src={Fleet} alt="" /> 
            <p>Create Fleet</p>
          </button>
          <button>
            <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
              <img src={Play} alt=""/>
              .efsfd
            </a>
          </button>
        </div>
        
        <div>
          <button>Stake</button>
          <button>
          <img src={Arrow} alt=""/>
            <p>Claim {props.unclaimedBalance} $ETERNAL</p>
          </button>
          <div>
            <img src="https://legacy.cryptomines.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feternal-logo.ff860841.png&w=32&q=75"/>
            <div>
              <h4>0$ ETL</h4>
              <button>
              <img src={Address} alt=""/>
                <p>address</p>
              </button>
            </div>
          </div>
        </div>

    </div>
  )
}
