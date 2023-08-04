import { CartContext } from '../../../context/CartContext'
import Cart from './Cart'
import { useContext } from 'react'


const CartContainer = () => {
    const {cart, clearCart, deleteItem} = useContext(CartContext)

    
    
  return <Cart clearCart={clearCart} cart={cart} deleteItem={deleteItem}/> 
}

export default CartContainer