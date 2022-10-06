import React from 'react'
import Logo from "../../svgs/logo.svg"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <img id="logo" src={Logo} />
        <h2>create fleet</h2>
        <h2>statke+claim</h2>
        <h2>eteranl</h2>
    </div>
  )
}
