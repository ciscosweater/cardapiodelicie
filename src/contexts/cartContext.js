import { createContext, useState } from "react";

const CartContext = createContext()

function CartStore({ children }) {

    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        setCartItems([...cartItems, item]);
    };

    function removeFromCart(item) {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
    };

    function wipeCart() {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, wipeCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartStore }