
import React from 'react'
import "./Footer.css"
import Footicon from "../Assets/logo_big.png"
import InstagramIcon from "../Assets/instagram_icon.png"
import Pinterest from "../Assets/pintester_icon.png"
import Whatsapp from "../Assets/whatsapp_icon.png"
const Footer = () => {
  return (
      <div className='footer'>
          <div className="footerlogo">
              <img src={Footicon} alt="" />
              <p>SHOPPY CART</p>
              
          </div>
          <ul className="footerlinks">
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
          <div className="footersocialicons">
              <div className="iconscontainer">
                  <img src={InstagramIcon} alt="" />
              </div>
              <div className="iconscontainer">
                  <img src={Pinterest} alt="" />
              </div>
              <div className="iconscontainer">
                  <img src={Whatsapp} alt="" />
              </div>
             

          </div>
          <div className="footercopyright">
              <hr/>
              <p> Copyright @ 2024 - All Right Reserved </p>
              
          </div>
    </div>
  )
}

export default Footer
