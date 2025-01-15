import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ cartItems, setCartItems }) => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  // on mount --> call this api and log the data --> https://dummyjson.com/products/productId

  async function getProductById() {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();

    setProduct(data);
  }

  useEffect(() => {
    getProductById();
  }, []);

  function addItemToCart() {
    console.log(product);
    const data = {
      id: product.id,
      price: product.price,
      title: product.title,
      returnPolicy: product.returnPolicy,
      imageUrl: product.thumbnail,
    };
    const newArray = [...cartItems, data];
    setCartItems(newArray);

    //saving same data in locastorage
    localStorage.setItem("cartItem", JSON.stringify(newArray));
  }

  return (
    <div style={{ marginTop: "18vh" }}>
      {product && (
        <div className="product-info">
          <div className="product-image-title" style={{ display: "flex" }}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="">
              <h1>{product.title}</h1>
              <p>Price : {product.price}$</p>
              <p>Description: {product.description}</p>
              <p>Rating : {product.rating}</p>
              <button onClick={() => addItemToCart()}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
