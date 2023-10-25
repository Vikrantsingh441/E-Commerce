import "./Header.scss";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { TbShoppingCart } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import components from "..";
import { Context } from "../../utils/Context";


const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [scrolled , setScrolled] = useState();
  const [showSearch,setShowSearch]=useState(false)
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
    <>
     <header className={`main-header ${scrolled ? "sticky-header":""}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <div className="centre">VZKYSTORE</div>
        <div className="right">
          <TbSearch  onClick={()=>setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon" onClick={()=>setShowCart(true)}>
            <TbShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
    {showCart && <components.Cart setShowCart={setShowCart}/>}
    {showSearch && <components.Search setShowSearch={setShowSearch}/>}
    </>
   
  );
};

export default Header;
