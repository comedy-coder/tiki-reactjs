import React from 'react'
import "./header.scss"
import logo from "../assets/header/logo1.png"
import logo2 from "../assets/header/logo-2.png"
const Header = () => {
  return (
  <div className="header">
      <div className="container">
        <div className="header__logo">
            <img src={logo} alt = "" />
            <img src={logo2} alt = "" />
            
        </div>    
    </div>
    </div>
  )
}

export default Header