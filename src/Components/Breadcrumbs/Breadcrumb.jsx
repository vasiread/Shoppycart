import "./Breadcrumb.css"
import React from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png"
import { Link } from "react-router-dom"
const Breadcrumb = (props) => {
    const { product } = props;
   return (
    <div className="breadcrumb">
           Home <img src={arrow_icon} alt="" /><Link style={{ textDecoration: "none", color: "#5e5e5e" }} to="/">SHOP</Link> <img src={arrow_icon} alt="" /> <Link style={{ textDecoration: "none", color: "#5e5e5e" }} to={`/${product.category}`}>{product.category}</Link> <img src={arrow_icon} alt=""/> {product.name}
    </div>
  )
}

export default Breadcrumb
