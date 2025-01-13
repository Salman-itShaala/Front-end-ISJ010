import { useEffect, useState } from "react";
import "./newariivals.css";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=4");
      const data = await res.json();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // api call --> mount
    getProducts();
  }, []);

  return (
    <section className="cards-container">
      <div className="card-heading">
        <h2>NEW ARRIVALS</h2>
      </div>
      <div className="card-item flex center wrap">
        {products.map((product) => {
          return (
            <Link
              // to do --> improve styling and rating
              // style={{ display: "flex", flexDirection: "column" }}
              key={product.id}
              to={`product-page/${product.id}`}
            >
              <img src={product.thumbnail} alt={product.title} />
              <div
                className="rating"
                style={{ "--rating": `${product.rating}` }}
                aria-label={`Rating: ${product.rating} out of 5`}
              ></div>
              <p>{product.title}</p>
              <p>Price : {product.price} $</p>
            </Link>
          );
        })}
      </div>

      <div className="view-all-btn flex center">
        <button className="show-all">View All</button>
      </div>
    </section>
  );
};

export default NewArrivals;
