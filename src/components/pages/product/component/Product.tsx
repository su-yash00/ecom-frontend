import { useCartContext } from "../../../../globalState/contexts/cartContext";
import { IProd } from "../ProductList";

const Product = ({ product }: any) => {
  const { dispatch } = useCartContext();
  const addToCart = (product: any) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const { title, category, price, image } = product;
  console.log("pppppp", product);

  return (
    <>
      {/* Product */}

      <div className="product">
        {/* {isNew && <div className="badge new">NEW</div>} */}
        {/* {isOnSale && <div className="badge sale">SALE</div>} */}
        {/* {quantity === 0 && (
          <div className="badge out-of-stock">OUT OF STOCK</div>
        )} */}
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-name">{title}</div>
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
