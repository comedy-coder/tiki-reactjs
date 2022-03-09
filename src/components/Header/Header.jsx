import React from 'react'
import "./header.scss"
import logo from "../../assets/header/logo1.png"
import logo2 from "../../assets/header/logo-2.png"
import Button from '../Button/Button'

const Header = () => {
  const navBar = 
  [
    {
    display : "trái cây",
    path : "trai-cay"
  },
    {
    display : "thịt trứng",
    path : "thitrung"
  },
    {
    display : "trái cây",
    path : "rau-cu-qua"
  },
    {
    display : "sữa,bơ,phô mai",
    path : "so-bo-pho-mai"
  },
    {
    display : "hả sản",
    path : "hai-san"
  },
    {
    display : "gạo mì ăn liền",
    path : "gao-mi-an-lien"
  },
]
  return (
  <div className="header">
      <div className="container">
        <div className="header__logo">
            <img src={logo} alt = "" className="header__logo__tiki" />
            <img src={logo2} alt = "" className="header__logo__freeship" />
        </div>    
        <div className="header__navbar">
          <div className="header__navbar__search">
              <div className="header__navbar__search__input">
                <input type="text" placeholder='Tìm danh mục sản phâm' className="header__navbar__input-text" />
          <Button backgroundColor="black"
            >Tìm kiếm</Button>
                </div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Header