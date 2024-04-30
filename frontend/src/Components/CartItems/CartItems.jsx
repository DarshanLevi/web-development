import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext.jsx";
import remove_icon from "../Assets/cart_cross_icon.png";





const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return  <div>
              <div className="cartItems-format">
                <img src={e.image} alt="" className="CartIcon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
              </div>
              <hr />
            </div>
          
        }
      })}
    </div>
  )
}

export default CartItems;
