import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import NavBar from "./components//navbar/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import Cart from "./components/cart/cart.jsx";
import Checkout from "./components/checkout/checkout.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<h3>404</h3>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
