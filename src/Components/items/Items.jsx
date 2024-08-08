import React from 'react'
import "./Items.css"

import { Link } from 'react-router-dom'
const Items = (props) => {
  return (
    <div className='items'>
      <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="itemprices">
        <div className="itempricenew">
          &#8377; {props.new_price*83}
        </div>
        <div className="itempriceold">
          &#8377; {props.old_price*83}
        </div>
      </div>
    </div>
  )
}

export default Items
