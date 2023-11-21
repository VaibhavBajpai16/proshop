import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const QuantitySelector = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.qty);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= item.countInStock) {
      setQuantity(newQuantity);
      dispatch(addToCart({ ...item, qty: newQuantity }));
    }
  };

  return (
    <div>
      <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
    </div>
  );
};

export default QuantitySelector;
