import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  const [cartItems, setCartItems] = useContext(CartContext);

  const sendReq = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );

      const data = await res.json();
      setSearchedProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search) {
      sendReq();
    } else {
      setSearchedProducts([]);
    }
  }, [search]);

  return (
    <header>
      <div className="sign-up">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <a href="#"> Sign Up Now</a>
        </p>
      </div>
      <div className="navbar flex">
        <div className="main-logo flex gap">
          <a href="/">
            <h2>SHOP.CO</h2>
          </a>
        </div>
        <ul>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">On Sale</a>
          </li>
          <li>
            <a href="">New Arrivals</a>
          </li>
          <li>
            <a href="">Brands</a>
          </li>
        </ul>
        <div className="search-bar">
          <div className="" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search for product"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {searchedProducts.map((product) => {
              return (
                <Link
                  style={{ display: "block" }}
                  to={`./product-page/${product.id}`}
                  key={product.id}
                >
                  {product.title}
                </Link>
              );
            })}
          </div>
          <a href="#">
            <img src="assets/search.svg" alt="" />
          </a>
        </div>
        <div className="hugs">
          <Link to="cart-page">
            {cartItems.length}
            <img
              src="	https://ajay-lokhande455.github.io/e-commerce/assets/cart.svg"
              alt=""
            />
          </Link>
          <a href="#">
            <img
              src="https://ajay-lokhande455.github.io/e-commerce/assets/account.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
