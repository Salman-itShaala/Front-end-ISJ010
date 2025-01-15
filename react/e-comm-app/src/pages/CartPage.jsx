import React from "react";

const CartPage = ({ cartItems, setCartItems }) => {
  console.log(cartItems);

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
