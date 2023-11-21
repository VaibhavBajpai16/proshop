import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "../assets/products.css";

const Product = ({ productData }) => {
  return (
    <Link to={`/product/${productData._id}`} className="product-link">
      <Card className="custom-card">
        <Card.Img
          src={productData.image}
          variant="top"
          className="card-image"
        />
        <Card.Body>
          <Card.Title as="div" className="card-title">
            <strong>{productData.name}</strong>
          </Card.Title>
          <Rating
            value={productData.rating}
            text={`${productData.numReviews} Reviews`}
          />
          <Card.Text as="h3" className="card-price">
            ${productData.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Product;
