import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart=()={

    }

    const clearCart=()={

    }

    const deleteItem=()={
        
    }


  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartContextProvider;
