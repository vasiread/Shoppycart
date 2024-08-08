import React from 'react'
import "./CSS/Loginsignup.css"
const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignupcontainer">
        <h1>Sign up</h1>
        <div className="loginsignupfields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignuplogin">
          Already have an account ? <span>Login here</span>

        </p>
        <div className="signupagree">
          <input type="checkbox" name="" id="" />
          <p>By agree, to use the terms of use and the privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default Loginsignup
