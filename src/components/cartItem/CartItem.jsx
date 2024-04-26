import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./cartItem.css"

const CartItem = ({ product }) => {
    const { removeFromCart, addToCart } = useContext(CartContext);
    const subtotal = product.price * product.cantidad;

    return (
        <div className="productContainer">
            <img src={product.imageURL} alt={product.title} className="productImage" />
            <div className="productDetails">
                <h3 className="productTitle">{product.title}</h3>
                <p className="productPrice">Precio unitario: ${product.price}</p>
                <p className="productTotal">Subtotal: ${subtotal}</p>
                <p className="productQuantity">Cantidad: {product.cantidad}</p>
                <div className="cartAcciones">
                    <button onClick={() => removeFromCart(product.id)}>
                        -
                    </button>
                    <button onClick={() => addToCart(product)}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;