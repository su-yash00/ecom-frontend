import { Link, Outlet } from "react-router-dom";
import NavbarComponent from "../../common/NavbarComponent";
import { useMemo } from "react";
// import { products } from "../product/ProductList";
import Product from "../product/component/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  return (
    <>
      <NavbarComponent />
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="categories_item categories_large_item">
                <img
                  src={require("../../../img/jpg/category-7.jpg")}
                  alt=""
                  className="img-fluid"
                />
                <div className="categories_text">
                  <h2>Fantasy</h2>
                  <p>Epic Adventures Beyond the Realms</p>
                  <button type="button" className="buy-btn">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="categories_item">
                    <img
                      src={require("../../../img/jpg/category-5.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="categories_text">
                      <h2>Science Fiction</h2>
                      <p>Journey to the Future</p>
                      <button type="button" className="buy-btn">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="categories_item">
                    <img
                      src={require("../../../img/jpg/category-4.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="categories_text">
                      <h2>Mystery & Thriller</h2>
                      <p>Unraveling the Truth</p>
                      <button type="button" className="buy-btn">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-4">
          <div className="title-text">
            <h3 className="">Trending Products</h3>
          </div>
          <div className="products-container">
            {/* {filteredProducts.map((product) => (
              <Product product={product} />
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
