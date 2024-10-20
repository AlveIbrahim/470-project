import React from 'react'
import './Layout.scss'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
        <div className='Nav'>
            <Navbar/>
        </div>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout