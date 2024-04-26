import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ProductCounter from "../itemCounter/ItemCounter";
import "./itemDetail.css"

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product, quantity);

    };

    return (
        <div className="container">
            {product && (
                <div>
                    <img  src={product.imageURL} alt={product.title} />
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Stock: {product.stock}</p>
                        <p>${product.price}</p>
                        <ProductCounter
                            counter={quantity}
                            setCounter={setQuantity}
                            stock={product.stock}
                        />
                        <div>
                            <button className="btn" onClick={handleAddToCart}>
                                Agregar al carrito
                            </button>
                            <Link to="/" className="Link">
                                Volver
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetail;