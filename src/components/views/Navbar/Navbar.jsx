import React from 'react'
import Logo from "../../svgs/logo.svg"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <img id="logo" src={Logo} />
        <h2>fleet</h2>
        
        <div>
          <h2>stake</h2>
          <h2>Eteranl</h2>
        </div>
        <img />
    </div>
  )
}
