import "./Header.scss";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { TbShoppingCart } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import components from "..";
import { Context } from "../../utils/Context";


const Header = () => {
  const [scrolled , setScrolled] = useState()
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
  },[])
  const handleScroll = ()=>{
    const offset = window.scrollY
    console.log("scroll",offset)
    if(offset>200){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }
  return (
    <header className={`main-header ${scrolled ? "sticky-header":""}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <div className="centre">VZKYSTORE</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <TbShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
