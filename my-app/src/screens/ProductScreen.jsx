import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { Link, useLocation } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import Rating from "../Components/Rating";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";
// import Product from "../Components/Product";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const { _id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  console.log("addToCart", addToCart);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addtoCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };
  function addtoCartHandler2() {
    console.log("this is addtoCartHandler2();");
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  }
  return (
    <>
      <Link className="btn btn-light mp-3 " to="/">
        Go Back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product?.image} alt={product?.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product?.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews `}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    classnme="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={() => {
                      //addtoCartHandler();
                      addtoCartHandler();
                    }}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
