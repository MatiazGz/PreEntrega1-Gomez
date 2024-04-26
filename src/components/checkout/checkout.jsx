import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "../checkOutForm/CheckoutForm";

const Checkout = () => {
    const { cart, precioTotal, emptyCart, createOrder } = useContext(CartContext);
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        confirmarEmail: '',
        cart: cart,
        precioTotal: precioTotal()
    });
    const [validationErrors, setValidationErrors] = useState({});
    const [orderInfo, setOrderInfo] = useState(null);
    const [orderAttempted, setOrderAttempted] = useState(false);
    const [cartEmptyError, setCartEmptyError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;

        if (name === 'nombre') {
            updatedValue = value.replace(/\d/g, ''); 
        } else if (name === 'telefono') {
            updatedValue = value.replace(/\D/g, '');
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));
    };

    const validateForm = () => {
        const { nombre, telefono, email, confirmarEmail } = formData;
        const errors = {};

        if (nombre.length < 4 || /\d/.test(nombre)) {
            errors.nombre = 'El nombre debe tener al menos 4 caracteres y no debe contener números.';
        }

        if (telefono.length < 9 || /\D/.test(telefono)) {
            errors.telefono = 'El teléfono debe tener al menos 9 dígitos y solo se admiten números.';
        }

        if (email !== confirmarEmail) {
            errors.email = 'Los correos electrónicos no coinciden.';
            errors.confirmarEmail = 'Los correos electrónicos no coinciden.';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOrderAttempted(true);

        if (cart.length === 0) {
            setCartEmptyError(true);
            return;
        }

        if (!validateForm()) {
            console.error('Error, intentelo de nuevo.');
            return;
        }

        try {
            const { nombre, telefono, email } = formData;
            const orderId = await createOrder({ nombre, telefono, email }, cart);
            setOrderInfo({ orderId });
            emptyCart();
        } catch (error) {
            console.error('Error al procesar la orden:', error);
        }
    };

    return (
        <div>
            {orderInfo ? (
                <div className="container">
                    <h3>Éxito, el ID de su orden es: {orderInfo.orderId}. Gracias!</h3>
                    <Link className="Link" to="/">volver al inicio</Link>
                </div>
            ) : (
                <div>
                <CheckoutForm
                    formData={formData}
                    validationErrors={validationErrors}
                    orderAttempted={orderAttempted}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    orderInfo={orderInfo}
                />
                {cartEmptyError && <p>¡Empieza un carrito de compras!</p>}
                </div>
            )}
        </div>
    );
};

export default Checkout;