import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "Products", id);

    getDoc(docRef).then((resp) => {
      if (resp.exists()) {
        setProduct({ ...resp.data(), id: resp.id });
      }
    });
  }, [id]);

  return product ? (
    <ItemDetail product={product} />
  ) : (
    <div className="Detail">
      <h3>No hay ningun producto</h3>
      <div className="DTC">
        <Link className="Link" to="/">
          volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
