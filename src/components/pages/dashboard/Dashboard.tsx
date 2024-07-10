import { Link, Outlet } from "react-router-dom";
import NavbarComponent from "../../common/NavbarComponent";
import { useMemo } from "react";
import { products } from "../product/ProductList";
import Product from "../product/component/Product";

const Dashboard = () => {
  const filteredProducts = useMemo(() => {
    const filteredProducts = products.filter((item) => item.isNew === true);
    return filteredProducts;
  }, [products]);

  console.log("pp", filteredProducts);

  return (
    <>
      <NavbarComponent />
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="categories_item categories_large_item">
                <img
                  src={require("../../../img/jpg/category-1.jpg")}
                  alt=""
                  className="img-fluid"
                />
                <div className="categories_text">
                  <h2>Women's Watch</h2>
                  <p>Fashionable, affordable and long time guaranteed</p>
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
                      src={require("../../../img/jpg/category-2.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="categories_text">
                      <h2>Men's Watch</h2>
                      <p>Affordable and Fashionable</p>
                      <button type="button" className="buy-btn">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="categories_item">
                    <img
                      src={require("../../../img/jpg/category-3.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="categories_text">
                      <h2>Kid's Watch</h2>
                      <p>Simple and Attractive</p>
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
            {filteredProducts.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
