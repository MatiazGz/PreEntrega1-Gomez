import { createContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/client";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty = 1) => {
    const addProduct = { ...product, qty };

    const newCart = [...cart];
    const isInTheCart = newCart.find((product) => product.id === addProduct.id);

    if (isInTheCart) {
      isInTheCart.qty += qty;
    } else {
      newCart.push(addProduct);
    }

    setCart(newCart);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.qty, 0);
  };

  const totalPrice = () => {
    return cart
      .reduce((acc, prod) => {
        const subtotal = prod.price * prod.qty;
        if (!isNaN(subtotal) && typeof subtotal === "number") {
          return acc + subtotal;
        }
        return acc;
      }, 0)
      .toFixed(2);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const createOrder = async (formData, cart) => {
    try {
      const { nombre, telefono, email } = formData;

      const orderData = {
        customer: {
          name: nombre,
          phone: telefono,
          email: email,
        },
        products: cart.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.qty,
        })),
        total: totalPrice(),
      };

      const ordersRef = collection(db, "orders");
      const newOrderRef = await addDoc(ordersRef, orderData);

      return newOrderRef.id;
    } catch (error) {
      console.error("error creating order:", error);
      throw new Error("error creating order");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        totalPrice,
        emptyCart,
        createOrder,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
