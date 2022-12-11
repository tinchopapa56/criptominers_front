import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import "./Home.css"

import {useEffect} from "react";
import { useGlobalContext } from '../../../context/context'


function Home() {

  const {soldiersContract, eternalContract, 
  walletAddress, provider, eternalBalance} = useGlobalContext()

  return (
    <div className="home">
        <Sidebar />
        <div className="home-container">
          <Navbar />
          <div className="content-container">
          {/* <Outlet context={[soldiersNFTContract, setSoldiersNFTContract]} /> */}
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Home