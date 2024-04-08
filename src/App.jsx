import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetail from "./views/ItemDetail.jsx";
import { NavBar } from "./components/NavBar.jsx";
import  {ItemListContainer} from "./components/ItemListContainer.jsx"
import { Contact } from "./views/Contact.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/products/:id" element={<ItemDetail />} />
        <Route path="/:categoryId" element={<ItemListContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;