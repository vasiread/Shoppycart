import React from 'react'
import "./Hero.css"
import HandIcon from "../Assets/hand_icon.png"
import ArrowIcon from "../Assets/arrow.png"
import heroimg from "../Assets/hero_image.png"
const Hero = () => {
  return (
      <div className='hero'>
          
          <div className="heroleft">
              <h2>New Arrivals Only</h2>
              <div>
                  <div className="herohandicon">
                      <p>new </p>
                      <img src={HandIcon} alt="" />
                  </div>
                  <p>collections</p>
                  <p>for everyone</p>
              </div>
              <div className="herolatestbutton">
                  <div>Latest Collection</div>
                  <img src={ArrowIcon} alt="" />
                  
              </div>
          </div>
          <div className="heroright">
              <img src={heroimg} alt="" />
              
          </div>
      
    </div>
  )
}

export default Hero
