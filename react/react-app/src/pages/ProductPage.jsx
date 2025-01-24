import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <>
      <h1>Product id is {productId}</h1>
    </>
  );
};

export default ProductPage;
