import React from 'react'
import "./header.scss"
import logo from "../../assets/header/logo1.png"
import logo2 from "../../assets/header/logo-2.png"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
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
                <input type="text" placeholder='Tìm danh mục sản phâm' className="header__navbar__search__input-text" />
                <Button backgroundColor="blue" icon={`bx bx-search-alt`} animate={true} size="sm"
                >Tìm kiếm</Button>
                </div>
                <div className="header__navbar__category">
                  {navBar.map((item,index) => (
                    <Link to = {item.path} key={index} >
                      <div className="header__navbar__category__list" key={index}> 
                      {item.display}</div>
                      </Link>
                      
                     ))}
                  </div>
              
            </div>
            </div>
            <div className="header__user">
                    <div className="header__user__icon">
                    <i className='bx bx-user' ></i>
                     </div>
                     <div className="header__user__front">
                    <div className="header__user__profile">
                      <span>Đăng nhập/</span>
                      <span>Đăng ký</span>
                    </div>
                    <div className="header__user__account">
                      <span>Tài khoản</span> 
                      <i className='bx bxs-down-arrow' ></i>
                      </div>
                      </div>
               </div>
               <div className="header__cart">
                 <div className="header__cart__item">
                 <i class='bx bx-cart' ></i>
                 <span>Giỏ Hàng</span>
                  </div>
                  <div className="header__cart__store">
                  <i class='bx bx-store' ></i>
                  <span>Bán hàng cùng tiki</span>
                    </div>

                 </div>
            
          
    </div>
    </div>
  )
}

export default Header