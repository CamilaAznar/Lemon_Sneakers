import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = isInCart(item.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return {...elemento, cantidad:  item.cantidad}
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    let cartFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(cartFiltrado);
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const totalPrice = () => {
    let total = cart.reduce( (acc, elemento) => {
      return acc + (elemento.precio * elemento.cantidad)
    }, 0)
    return total 
  }

  const totalQuantity = () => {
    let total = cart.reduce( (acc, elemento) => {
      return acc +  elemento.cantidad
    }, 0)
    return total 
  }

  const getQuantityById = (id) => {
    const product = cart.find((elemento) => elemento.id === id)
    return product?.cantidad
  }

  let data = { cart, addToCart, clearCart, deleteItem, totalPrice, totalQuantity, getQuantityById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
