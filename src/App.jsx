import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetail from "./views/ItemDetail.jsx";
import data from "./data/products.json"
import { NavBar } from "./components/NavBar.jsx";
import { Home } from "./views/Home.jsx";
import { Contact } from "./views/Contact.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products/:id"
          element={<ItemDetail />}
        />
        <Route path="category/:categoryId" element={<Home />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;