import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import "./Home.css"

function Home() {
  return (
    <div className="home">
        <Navbar />
        <div className="home-container">
          <Sidebar />
          <div className="content-container">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Home