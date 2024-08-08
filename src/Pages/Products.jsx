import React, { useContext } from 'react'
import  { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproduct from '../Components/Relatedproduct/Relatedproduct';

const Products = () => {
  const { all_products } = useContext(Shopcontext);

  const { productId } = useParams();
  
  const products = all_products.find(e => e.id === Number(productId));

  return (
    <div>
      <Breadcrumb product={products} />
      <Productdisplay product={products} /> 
      <Descriptionbox />
      <Relatedproduct/>
    </div>
  )
}

export default Products
