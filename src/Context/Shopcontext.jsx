import React, { createContext, useState } from "react";
import allProducts from "../Components/Assets/all_product";
 
const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < allProducts.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const Shopcontextprovider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product) => product.id === Number(item));
                totalAmount += 83*itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };
    const contextValue = { all_products: allProducts, cartItems, addToCart, removeToCart, getTotalCartAmount, getTotalCartItems };
  
    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default Shopcontextprovider;
export { Shopcontext };
