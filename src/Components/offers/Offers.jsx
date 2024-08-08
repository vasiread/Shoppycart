import React from 'react'
import "./Offers.css"
import exclusive_img from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
      <div className='offers'>
          
          <div className="offersleft">
              <h1>Exclusive</h1>
              <h1>Offers For You</h1>
              <p>Only For Best Sellers Products</p>
              <button>Check Now</button>
          </div>
          <div className="offersright">
              <img src={exclusive_img} alt="" />
          </div>
    </div>
  )
}

export default Offers
