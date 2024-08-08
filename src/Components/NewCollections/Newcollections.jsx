import React from 'react'
import "./Newcollections.css"
import newcollection from "../Assets/new_collections"
import Items from '../items/Items'
const Newcollections = () => {
  return (
      <div className='newcollections'>
          <h1>NEW COLLECTIONS</h1>
          <hr />
          <div className="collections">
              {newcollection.map((items, i) => {
                  return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
              })}
          </div>
      
    </div>
  )
}

export default Newcollections
