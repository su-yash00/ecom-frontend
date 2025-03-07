// import { IProduct } from "../../components/pages/product/component/Product";

import { IProd } from "../../components/pages/product/ProductList";

// Define the shape of cart state
interface CartState {
  cartItems: IProd[];
}

// Define action interface for adding a product to cart
interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: IProd;
}

// Union type for all possible cart actions
export type CartAction = AddToCartAction;

// Reducer function to handle cart state changes based on actions
export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};
