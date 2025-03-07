import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DataRouter from "./DataRouter";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./globalState/contexts/cartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <DataRouter />
    </CartProvider>
  );
}

export default App;
