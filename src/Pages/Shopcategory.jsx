import React, { useContext } from 'react';
import "./CSS/Shopcategory.css";
import { Shopcontext } from '../Context/Shopcontext';
import dropdown from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/items/Items";

const Shopcategory = (props) => {
    const { all_products } = useContext(Shopcontext);

    if (!all_products) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='shopcategory'>
            <img className="shopcategorybanner" src={props.banner} alt="" />
            <div className="shopcategoryindexsort">
                <p>
                    <span>Showing 1 - 12 </span> out of 36 products
                </p>
                <div className="shopcategorysort">
                    Sort by <img src={dropdown} alt="" />
                </div>
            </div>
            <div className="shopcategoryproducts">
                {all_products.map(item => {
                    return props.category === item.category ? (
                        <Items
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ) : null;
                })}
            </div>
            <div className="shopcategoryloading">
                Explore More
            </div>
        </div>
    );
}

export default Shopcategory;
