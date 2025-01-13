import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
