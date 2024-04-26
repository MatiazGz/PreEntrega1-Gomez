import { Link } from 'react-router-dom';
import "./checkoutForm.css"


const CheckoutForm = ({ formData, validationErrors, orderAttempted, handleChange, handleSubmit, orderInfo }) => {
    const renderOrderInfo = () => {
        if (!orderInfo) {
            return null;
        }

        return (
            <div>
                <h3>Éxito, el ID de su orden es: {orderInfo.orderId}. Gracias!</h3>
                <Link to="/" className="Link">
                    Volver al Inicio
                </Link>
            </div>
        );
    };

    return (
        <div className="checkoutContainer">
            {orderInfo ? (
                renderOrderInfo()
            ) : (
                <div className="checkout">
                    <div className="orderSummary">
                        <h3>Resumen de la Orden</h3>
                        <ul>
                            {formData.cart.map((product) => (
                                <li key={product.id}>
                                    {product.title} - Cantidad: {product.cantidad}
                                </li>
                            ))}
                        </ul>
                        <strong>Total: ${formData.precioTotal}</strong>
                    </div>
                    <form className="checkoutForm" onSubmit={handleSubmit}>
                        <label>
                            Nombre:
                            <input
                                placeholder='Ingrese su nombre'
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                            {orderAttempted && validationErrors.nombre && (
                                <span className="error">{validationErrors.nombre}</span>
                            )}
                        </label>
                        <label>
                            Teléfono:
                            <input
                                placeholder='Ingrese su teléfono'
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                required
                            />
                            {orderAttempted && validationErrors.telefono && (
                                <span className="error">{validationErrors.telefono}</span>
                            )}
                        </label>
                        <label>
                            Email:
                            <input
                                placeholder='Ingrese su email'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {orderAttempted && validationErrors.email && (
                                <span className="error">{validationErrors.email}</span>
                            )}
                        </label>
                        <label>
                            Confirmar Email:
                            <input
                                placeholder='Confirme su email'
                                type="email"
                                name="confirmarEmail"
                                value={formData.confirmarEmail}
                                onChange={handleChange}
                                required
                            />
                            {orderAttempted && validationErrors.confirmarEmail && (
                                <span className="error">{validationErrors.confirmarEmail}</span>
                            )}
                        </label>
                        <button type="submit">Realizar Pedido</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;