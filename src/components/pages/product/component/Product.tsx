import { useCartContext } from "../../../../globalState/contexts/cartContext";
import NavbarComponent from "../../../common/NavbarComponent";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgSrc: any; // Adjust 'any' to the appropriate type, e.g., string
  isNew: boolean;
  isOnSale: boolean;
}

interface ProductProps {
  product: IProduct;
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const { dispatch } = useCartContext();
  const addToCart = (product: any) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const { isNew, isOnSale, imgSrc, name, price, quantity } = product;
  return (
    <>
      {/* Product */}

      <div className="product">
        {isNew && <div className="badge new">NEW</div>}
        {isOnSale && <div className="badge sale">SALE</div>}
        {quantity === 0 && (
          <div className="badge out-of-stock">OUT OF STOCK</div>
        )}
        <div className="product-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
        <button
          type="button"
          onClick={() => {
            addToCart(product);
          }}
        >
          AddtoCart
        </button>
      </div>
    </>
  );
};

export default Product;
