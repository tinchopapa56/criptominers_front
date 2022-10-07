import React from 'react'
import Logo from "../../svgs/logo.svg"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <img id="logo" src={Logo} />
        <h2>fleet</h2>
        
        {/* <div> */}
          <h2>Stake</h2>
          <h2>Eternal</h2>
        {/* </div> */}
    </div>
  )
}
