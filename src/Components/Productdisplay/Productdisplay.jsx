import "./Productdisplay.css";
import React, { useContext } from 'react';
import staricon from "../Assets/star_icon.png";
import stardull from "../Assets/star_dull_icon.png";
import { Shopcontext } from "../../Context/Shopcontext";

const Productdisplay = (props) => {
    const { product } = props;
    const {addToCart} =useContext(Shopcontext)

    return (
        <div className="productdisplay">
            <div className="productdisplayleft">
                <div className="productdisplayimagelist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplayimage">
                    <img className="productdisplaymainimg" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplayright">
                <h1>{product.name}</h1>
                <div className="productdisplayrightstars">
                    <img src={staricon} alt="" />
                    <img src={staricon} alt="" />
                    <img src={staricon} alt="" />
                    <img src={staricon} alt="" />
                    <img src={stardull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplayrightprice">
                    <div className="productdisplayrightpriceold">
                        &#8377; {product.old_price * 83}
                    </div>
                    <div className="productdisplayrightpricenew">
                        &#8377; {product.new_price * 83}
                    </div>
                </div>
                <div className="productdisplayrightdescription">
                    Experience ultimate comfort and style with our Classic Fit Shirt. Made from premium cotton, this shirt offers a soft touch and breathability perfect for any occasion.
                </div>
                <div className="productdisplayrightsize">
                    <h1>Select Size</h1>
                    <div className="productdisplayrightsizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>(addToCart(product.id))}>Add to Cart</button>
                <p className="productdisplayrightcategory">
                    <span>Category :</span> Women, T-Shirt, CropTop
                </p>
                <p className="productdisplayrightcategory">
                    <span>Tags :</span> Modern, Latest
                </p>
            </div>
        </div>
    );
};

export default Productdisplay;
