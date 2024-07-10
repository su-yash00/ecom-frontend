import { Dispatch, createContext, useContext, useReducer } from "react";
import { CartAction, cartReducer } from "../reducers/cartReducer";

// Define the state type
interface CartState {
  cartItems: any[]; // Adjust 'any' to the appropriate type for cart items
}

// Define the initial state
const initialState: CartState = { cartItems: [] };

// Create a context with the state and dispatch types
const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => undefined, // Provide a default no-op dispatch function
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  //   console.log(state);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("context not found");
  }
  return context;
};
