import React from 'react'
import "./Relatedproduct.css"
import dataproduct from '../Assets/data'
import Items from '../items/Items'
const Relatedproduct = () => {
  return (
    <div className='relatedproducts'>
          <h1>Related Products</h1>
          <hr />
          <div className="relatedproductitems">
              {dataproduct.map((items, i) => (
                  <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
              ))}
          </div>
    </div>
  )
}

export default Relatedproduct
