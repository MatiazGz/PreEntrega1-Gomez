import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "products", id);

    getDoc(docRef).then((resp) => {
      if (resp.exists()) {
        setProduct({ ...resp.data(), id: resp.id });
      }
    });
  }, [id]);

  return product ? (
    <ItemDetail product={product} />
  ) : (
    <div>
      <h3>No hay ningun producto</h3>
      <Link className="Link" to="/">
        volver al inicio
      </Link>
    </div>
  );
};

export default ItemDetailContainer;
