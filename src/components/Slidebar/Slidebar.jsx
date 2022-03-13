import React from 'react';
import "./slidebar.scss";
import {useRef} from 'react';

const Slidebar = () =>
{   const slidebarItem = [
    {
    display : "Thịt, rau củ",
    path:"thit-rau-cu"
   },
    {
    display : "Bách hóa",
    path:"bach-hoa"
   },
    {
    display : "Nhà cửa",
    path:"nha-cua"
   },
    {
    display : "Điện tử",
    path:"dien-tu"
   },
    {
    display : "Thiết bị số",
    path:"thiet-bi-so"
   },
    {
    display : "Điện thoại",
    path:"dien-thoai"
   },
    {
    display : "Mẹ và bé",
    path:"me-va-be"
   },
    {
    display : "Làm đẹp",
    path:"lam-dep"
   },
    {
    display : "Gia dụng",
    path:"gia-dung"
   },
    {
    display : "Thời trang nữ",
    path:"thoi-trang-nu"
   },
    {
    display : "Thời trang nam",
    path:"thoi-trang-nam"
   },
    {
    display : "Giày nữ",
    path:"giay-nu"
   },
   {
   display : "Túi Nữ",
   path:"tui-nu"
   },
   {
   display : "Túi nam",
   path:"tui-nam"
   },
   {
   display : "Balo & Vali",
   path:"balo-vali"
   },
   {
   display : "Phụ kiện",
   path:"phu-kien"
   },
   {
   display : "Đồng hồ",
   path:"dong-ho"
   },
   {
   display : "Lap top",
   path:"lap-top"
   },
   {
   display : " Quốc tế",
   path:"quoc-te"
   },
   {
   display : "Voucher",
   path:"voucher"
   },
   {
   display : "Xe",
   path:"xe"
   },
   {
       display : "Sách",
       path :"sach"
   },
   {
       display : "Thể thao",
       path :"the-thao"
   },
   {
       display : "Máy ảnh",
       path :"may-anh"
   }
]
    const menuLeft = useRef(null)
    const menuToogle = () => menuLeft.current.classList.toggle('active')
        
  return (
    <div className = "slidebar "> 
    <div className="container">
            <div className="slidebar__list" >
                {slidebarItem.map((item,index)=>
                (
                    <div className="slidebar__list__item" ref= {menuLeft} key={index}>
                         {item.display}</div>
                )
                )}
            </div>
            <div className="sliderbar__arrow" onClick={menuToogle}>
            <i className='bx bx-chevron-right' >
            </i>
                
            </div>
    </div>
    </div> 

  )
}

export default Slidebar