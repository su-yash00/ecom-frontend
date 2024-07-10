import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DataRouter from "./DataRouter";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./globalState/contexts/cartContext";

function App() {
  return (
    <CartProvider>
      <DataRouter />
    </CartProvider>
  );
}

export default App;
