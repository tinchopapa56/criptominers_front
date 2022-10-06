import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import {Ship, Market, Planets, Soldiers} from "../../../svgs/svgsSidebar"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__chuncks">
        <div>

        </div>
        <ul>
          <li>
            <Link to="/home/soldiers">
              <Soldiers width="25px"/>
              <p>SOLDIERS</p>
            </Link>
          </li>
          <li>
            <Link to="/home/ships">
            <Ship width="25px" />
              <p>SHUTTLES</p>
              
            </Link>
          </li>
          <li>
            <Link to="/home/planets">
              <Planets width="25px" />
              <p>PLANETS</p>
            </Link>
          </li>
          <li>
            <Link to="/home/marketplace">
              <Market width="25px" />
              <p>MARKET</p>
            </Link>
          </li>
        </ul>
      
      </div>
    </div>
  )
}

export default Sidebar