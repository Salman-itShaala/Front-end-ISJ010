import { Link } from "react-router-dom";

const ProductCard = ({ rating, id, price, title, imageUrl }) => {
  return (
    <Link
      // to do --> improve styling and rating
      style={{ display: "flex", flexDirection: "column" }}
      key={id}
      to={`product-page/${id}`}
    >
      <img src={imageUrl} alt={title} />
      <div>
        <div
          className="rating"
          style={{ "--rating": `${rating}` }}
          aria-label={`Rating: ${rating} out of 5`}
        ></div>
      </div>
      <p>{title}</p>
      <p>Price : {price} $</p>
    </Link>
  );
};

export default ProductCard;
