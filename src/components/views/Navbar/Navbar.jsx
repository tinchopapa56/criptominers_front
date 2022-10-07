import React from 'react'
import Logo from "../../svgs/logo.svg"
import "./Navbar.css"

export default function Navbar(props) {
  return (
    <div className='navbar'>
        <img id="logo" src={Logo} />
        <h2>fleet</h2>
        
        {/* <div> */}
          <h2>Stake</h2>
          <p>{props.balance}</p>
        {/* </div> */}
    </div>
  )
}
