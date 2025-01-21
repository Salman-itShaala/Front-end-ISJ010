import React, { useContext } from "react";
import { CartContext } from "../App";

const CartPage = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  return (
    <div className="cart-page">
      <ol>
        {cartItems.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default CartPage;
