import { useState, useEffect } from "react";
import "./ItemsView.css";
import { useParams } from "react-router-dom";

import products from "../data/products.json"

const ItemDetail = () => {
  const [productId, setProductId] = useState(null)
  const { id } = useParams()

  useEffect(() => {
      setProductId(products.find(product => product.id === Number(id)))
  }, [id])

  if (!productId) return <div>Loading...</div>

  return (
    <div className="itemView">
      <h1>{productId.name}</h1>
      <h2>{productId.description}</h2>
      <img src={productId.image} alt={productId.name} />
    </div>
  );
}

export default ItemDetail;
