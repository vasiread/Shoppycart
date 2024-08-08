import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { Shopcontext } from '../../Context/Shopcontext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(Shopcontext);

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>SHOPPY CART</p>
      </div>
      <ul className="navmenu">
        <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="navlogincart">
        <Link to="/loginsignup"><button>Login</button></Link>
        <Link to="/cart"><img src={cartIcon} alt="" /></Link>
        <div className="navcartcount">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
