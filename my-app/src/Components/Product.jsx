import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Product = ({ productData }) => {
  return (
    <>
      <Link to={`/product/${productData._id}`}>
        <Card className="my-3 p-3 rounded">
          <Card style={{ width: "0%" }}></Card>
          <Card.Img src={productData.image} variant="top" />
          <Card.Body>
            <Card.Title as="div">
              <strong>{productData.name}</strong>
            </Card.Title>
            <Rating
              value={productData.rating}
              text={`${productData.numReviews} Reviews`}
            />
            <Card.Text as="h3">${productData.price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Product;
