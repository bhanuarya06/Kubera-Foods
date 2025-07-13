import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/appStore";
import Dish from "./Dish";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  const dispatch = useDispatch()

  const handleClearCart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-2 p-2">
      <h1 className="font-bold text-3xl p-2">Cart</h1>
      <div className="w-6/12 p-2 m-auto ">
        <button className="border bg-black text-white font-bold m-2 p-2 rounded-lg hover:cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1>No items added to the cart</h1>}
        {cartItems.map((item) => (
          <Dish key={item?.card?.info?.id} dish={item}></Dish>
        ))}
      </div>
    </div>
  );
};

export default Cart;
