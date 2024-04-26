import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from "../itemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/client"
import "./ItemListContainer.css"
import { Container } from 'react-bootstrap';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "Products");
        let productsFiltered;

        if (categoryId) {
          productsFiltered = query(productsRef, where("categoryId", "==", categoryId));
        } else {
          productsFiltered = productsRef;
        }

        const snapshot = await getDocs(productsFiltered);

        setProducts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } 
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <Container>      
      <div>
      <h3 style={{display: 'flex', justifyContent:'center', marginTop:'40px'}} >{categoryId ? categoryId : "Nuestros productos"}</h3>
      </div>
      <div className="container">
        {products.length === 0 && (
          <div>
            <h3>La categoría no existe</h3>
            <Link className="link" to="/"> volver al inicio</Link>
          </div>

        )}
        <ItemList products={products} />
      </div>
    </Container>
    
  );
};

export default ItemListContainer;