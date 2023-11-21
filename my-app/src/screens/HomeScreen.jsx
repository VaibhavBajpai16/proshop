import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useGetProductsQuery } from "../slices/productApiSlice";
import ProductCarousel from "../Components/ProductCarousel";

const HomeScreen = () => {
  const { data: product, isLoading, error } = useGetProductsQuery();
  return (
    <>
      <ProductCarousel />
      <>
        <h1 className="latest-products-heading">Latest Products</h1>
        <Row>
          {product?.map((productItem, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product productData={productItem} />
            </Col>
          ))}
        </Row>
      </>
    </>
  );
};
export default HomeScreen;
