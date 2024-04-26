import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import "./cart.css"

const Cart = () => {
    const { cart, totalPrice, emptyCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        emptyCart();
    };

    return (
        <div className="container">
            <h3>Carrito</h3>
            <div className="productList">
                {cart.map((prod) => (
                    <CartItem key={prod.id} product={prod} />
                ))}
            </div>
            {cart.length > 0 ? (
                <div className="cartSummary">
                    <h2 className="total">Total: ${totalPrice()}</h2>
                    <div className="buttonsContainer">
                        <button className="btn" onClick={handleEmptyCart}>
                            Vaciar carrito
                        </button>
                        <Link to="/checkout" className="Link">
                            Finalizar compra
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="emptyCart">
                    <h3>Tienes un carrito por llenar!</h3>
                    <Link className="Link"to="/">
                        Volver al inicio
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;