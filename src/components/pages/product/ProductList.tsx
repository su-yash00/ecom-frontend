import NavbarComponent from "../../common/NavbarComponent";
import Product from "./component/Product";

interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgSrc: string;
  isNew: boolean;
  isOnSale: boolean;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: "omege 3",
    price: 2000,
    quantity: 10,
    imgSrc: require("../../../img/jpg/product-1.jpg"),
    isNew: false,
    isOnSale: false,
  },
  {
    id: 2,
    name: "Rolex",
    price: 2100,
    quantity: 40,
    imgSrc: require("../../../img/jpg/product-1.jpg"),
    isNew: true,
    isOnSale: false,
  },
  {
    id: 3,
    name: "Gucci",
    price: 1990,
    quantity: 0,
    imgSrc: require("../../../img/jpg/product-1.jpg"),
    isNew: false,
    isOnSale: false,
  },
  {
    id: 4,
    name: "Piaget",
    price: 1200,
    quantity: 70,
    imgSrc: require("../../../img/jpg/product-1.jpg"),
    isNew: false,
    isOnSale: false,
  },
  {
    id: 5,
    name: "Tissot",
    price: 1500,
    quantity: 100,
    imgSrc: require("../../../img/jpg/product-1.jpg"),
    isNew: true,
    isOnSale: false,
  },
];

const ProductList = () => {
  return (
    <>
      <NavbarComponent />
      <div className="products-container">
        {products.map((product, index) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
