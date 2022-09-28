import React from 'react'
import logo from '../../images/logo.webp'
import './Header.css'

const Header = () => {
  return (
    <nav className="header_container">
      <div className="logo_container">
        <img src={logo} alt="" />
        <h3 className="title">Sports Club</h3>
      </div>
      <div className="navbar">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/more">More</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Header
