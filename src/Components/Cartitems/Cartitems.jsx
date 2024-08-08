import React, { useContext } from 'react';
import './Cartitems.css';
import { Shopcontext } from '../../Context/Shopcontext';
import removeIcon from '../Assets/cart_cross_icon.png';

const Cartitems = () => {
    const { all_products, cartItems, removeToCart, getTotalCareAmount } = useContext(Shopcontext);

    return (
        <div className='cartitems'>
            <div className="cartitemsup">
                <div className='cartitemsformatemain'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p style={{ cursor: "pointer" }}>Remove</p>
                </div>
                <hr />

                {all_products.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className='cartitemsformate cartitemsformatemain'>
                                    <img src={e.image} alt={e.name} className='carticonproduct' />
                                    <p>{e.name}</p>
                                    <p>₹  {e.new_price * 83}</p>
                                    <button className='cartitemsquantity'>{cartItems[e.id]}</button>
                                    <p> ₹ {83 * e.new_price * cartItems[e.id]}</p>
                                    <img src={removeIcon} className='cartitemsremoveicon' alt="Remove item" onClick={() => removeToCart(e.id)} />
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
           

            <div className="cartitemsdown">
                <div className="cartitemstotal">

                <h1>Cart Totals</h1>
                <div className="cartsitemtotalitems">
                    <p>Subtotal</p>
                    <p>₹ {getTotalCareAmount}</p>
                </div>
                <hr />
                <div className="cartsitemtotalitems">
                    <p>Shipping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartsitemtotalitems">
                    <h3>Total</h3>
                    <h3>₹ {getTotalCareAmount}</h3>
                </div>
                <button>Proceed To Checkout</button>
                <div className="cartitemspromocode">
                    <p>If you have a promo code enter it here</p>
                    <div className="cartitemspromobox">
                        <input type="text" placeholder='promocode' />
                        <button>submit</button>
                    </div>
                </div>

            </div>
            </div>

        </div>
    );
};

export default Cartitems;
