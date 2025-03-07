import { useState } from "react";
import NavbarComponent from "../../common/NavbarComponent";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gucci G-Timeless Kingsnake Watch",
      price: 1150,
      discount: 20,
      quantity: 1,
      img: "https://example.com/gucci-watch.jpg", // Add the correct image URL or import the image
    },
    {
      id: 2,
      name: "Piaget Altiplano Ultimate Manual Watch",
      price: 6200,
      discount: 40,
      quantity: 1,
      img: "https://example.com/piaget-watch.jpg", // Add the correct image URL or import the image
    },
  ]);

  const incrementQuantity = (id: any) => {
    setCartItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: any) => {
    setCartItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //   const removeItem = (id:any) => {
  //     setCartItems((prevIt:any) => prevItems.filter((item:any) => item.id !== id));
  //   };

  const totalAmount = cartItems?.reduce(
    (total: any, item: any) => total + item.price * item.quantity,
    0
  );

  // const totalSavings = cartItems?.reduce(
  //   (total: any, item: any) =>{
  //     total + ((item.price * item.discount) / 100) * item.quantity,
  //   0
  // );
  return (
    <>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>``
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <p>{item.discount}%</p>
              <div className="quantity-control">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <p>Total Price: ₹ {totalAmount}</p>
          <p>Number of Items: {cartItems.length}</p>
          {/* <p>You Save: ₹ {totalSavings}</p> */}
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
