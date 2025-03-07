import { useEffect, useMemo, useState } from "react";
// import { products } from "../product/ProductList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";

const Dashboard = () => {
  // const filteredProducts = useMemo(() => {
  //   const filteredProducts = products.filter((item) => item.isNew === true);
  //   return filteredProducts;
  // }, [products]);

  // console.log("pp", filteredProducts);

  async function fetchProducts() {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=8"
    );
    return response.data;
  }

  const { data: productsData } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  console.log("data", productsData);
  const categories = [
    {
      title: "Fantasy",
      subtitle: "Epic Adventures Beyond the Realms",
      image: require("../../../img/jpg/category-7.jpg"),
    },
    {
      title: "Science Fiction",
      subtitle: "Journey to the Future",
      image: require("../../../img/jpg/category-5.jpg"),
    },
    {
      title: "Mystery & Thriller",
      subtitle: "Unraveling the Truth",
      image: require("../../../img/jpg/category-4.jpg"),
    },
    {
      title: "Horror",
      subtitle: "Nightmares Come to Life",
      image: require("../../../img/jpg/category-8.jpg"),
    },
    {
      title: "Biography & Memoir",
      subtitle: "Lives That Inspire",
      image: require("../../../img/jpg/category-4.jpg"),
    },
    {
      title: "Poetry",
      subtitle: "Words That Touch the Soul",
      image: require("../../../img/jpg/category-10.jpg"),
    },
  ];
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    const lastRefresh = Number(localStorage.getItem("lastRefresh")) || 0;
    const currentTime = Date.now();

    if (currentTime - lastRefresh > 1000) {
      setIsToggled(true);
      setTimeout(() => {
        setIsToggled(false);
      }, 1000);
    }

    localStorage.setItem("lastRefresh", currentTime.toString());
  }, []);
  console.log("isToggled", isToggled);

  return (
    <>
      <Container className="py-4">
        <Row className="g-4">
          {isToggled
            ? Array.from({ length: 6 }).map((_, index) => (
                <Col key={index} xs={12} sm={6} lg={3}>
                  <Card className="shadow-sm position-relative text-white">
                    <Placeholder
                      as={Card.Img}
                      className="img-fluid bg-secondary"
                      style={{ height: "200px" }}
                    />
                    <Card.ImgOverlay className="d-flex flex-column justify-content-end p-4">
                      <Placeholder as={Card.Title} animation="wave">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="wave">
                        <Placeholder xs={8} />
                      </Placeholder>
                      <Placeholder.Button
                        variant="light"
                        className="btn-sm w-auto"
                      />
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))
            : categories.map((category, index) => (
                <Col key={index} xs={12} sm={6} lg={3}>
                  <Card className="shadow-sm position-relative text-white">
                    <Card.Img
                      variant="top"
                      src={category.image}
                      className="img-fluid"
                    />
                    <Card.ImgOverlay
                      className="d-flex flex-column justify-content-end p-4"
                      style={{ background: "rgba(0, 0, 0, 0.5)" }}
                    >
                      <Card.Title className="fw-bold">
                        {category.title}
                      </Card.Title>
                      <Card.Text>{category.subtitle}</Card.Text>
                      <Button variant="light" className="btn-sm w-auto">
                        BUY NOW
                      </Button>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              ))}
        </Row>
      </Container>
      {/* Trending Products */}
      <Container className="py-4">
        <h2 className="text-center">Trending Products</h2>
        {/* Add trending products here */}
      </Container>
    </>
  );
};
export default Dashboard;
