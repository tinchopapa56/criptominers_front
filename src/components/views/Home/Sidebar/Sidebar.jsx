import React from 'react'
import "./Sidebar.css"
import Logo from "../../../svgs/logo.svg"
import {Link} from "react-router-dom"
import {Ship, Market, Planets, Soldiers, ClaimFunds} from "../../../svgs/svgsSidebar"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__chuncks">
      
        {/* <div>
  
        </div> */}
        <ul>
          <li>
          <img id="logo" src={Logo} />
          </li>
          {/* <img id="logo" src={Logo} /> */}
          <li>
            <Link to="/home/soldiers">
              <Soldiers width="25px" fill="white"/>
              <p>SOLDIERS</p>
            </Link>
          </li>
          <li>
            <Link to="/home/ships">
            <Ship width="25px" fill="white"/>
              <p>SHUTTLES</p>
              
            </Link>
          </li>
          <li>
            <Link to="/home/planets">
              <Planets width="25px" fill="white" />
              <p>PLANETS</p>
            </Link>
          </li>
          <li>
            <Link to="/home/marketplace">
              <Market width="25px" fill="white"/>
              <p>MARKET</p>
            </Link>
          </li>
          <li>
            <Link to="/home/claimFunds">
              <Market width="25px" fill="white"/>
              <p>CLAIMFUNDS</p>
            </Link>
          </li>
        </ul>
      
      </div>
    </div>
  )
}

export default Sidebar