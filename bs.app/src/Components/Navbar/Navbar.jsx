import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <div className='left'>
            <a href="/" className="logo">
                <img src="/logo.png" alt="" />
                <span>BS Services</span>
            </a>
            <ul>
                <li>Contact</li>
            </ul>
        </div>
        <div className='right'>
            <ul>
                <a href='/'><li>Sign in</li></a>
                <a href='/'className="register"><li>Sign up</li></a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar