import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item])
  };

  const clearCart = () => {
    setCart([])
  };

  const deleteItem = (id) => {
    console.log(id)
  };

  let data = { cart, addToCart, clearCart, deleteItem };


  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
