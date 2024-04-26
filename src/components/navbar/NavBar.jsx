import { useState, useEffect } from "react";
import { CartWidget } from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const productsRef = collection(db, "products");
      const productsSnapshot = await getDocs(productsRef);

      const uniqueCategories = [];

      productsSnapshot.forEach((doc) => {
        const productData = doc.data();
        if (
          productData.categoryId &&
          !uniqueCategories.includes(productData.categoryId)
        ) {
          uniqueCategories.push(productData.categoryId);
        }
      });

      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error al obtener categorías", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">
          <NavLink className="navbar-brand" to="/">
            React Shop
          </NavLink>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavDropdown
                title="productos"
                className="categoria"
                id="dropdown-basic"
              >
                <NavDropdown.Item as={NavLink} to="/">
                  Todos los productos
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/category/verano">
                  Verano
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/category/invierno">
                  Invierno
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/category/deportes">
                  Deportes
                </NavDropdown.Item>
                {categories.map((cat, index) => (
                  <NavDropdown.Item
                    key={index}
                    as={NavLink}
                    to={`/category/${cat}`}
                  >
                    {cat}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </li>
          </ul>
          <CartWidget />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
