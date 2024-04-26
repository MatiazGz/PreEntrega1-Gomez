import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from "../itemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/client"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
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
    <div className="contenedor">
      <div>
      <h3 style={{display: 'flex', justifyContent:'center', marginTop:'40px'}} >{categoryId ? categoryId : 'Todos los productos'}</h3>
      </div>
      <div className="container">
        {products.length === 0 && (
          <div>
            <h3>parece que la categoria no existe</h3>
            <Link className='Link' to="/"> volver al inicio</Link>
          </div>

        )}
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;