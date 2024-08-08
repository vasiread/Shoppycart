import React from 'react'
import "./Newsletter.css"
const Newsletter = () => {
  return (
      <div className='newsletter'>
          <h1>Get Exclusive Offers On Your Mail</h1>
          <p>Subscribe to Our Newsletter and Stay Updated</p>
      
          <div>
              <input type="text" placeholder='Enter Your MailId' />
              <button>Subscribe</button>
          </div>
    </div>
  )
}

export default Newsletter
