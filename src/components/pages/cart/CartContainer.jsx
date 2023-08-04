import { CartContext } from '../../../context/CartContext'
import Cart from './Cart'
import { useContext } from 'react'
import Swal from "sweetalert2";

const CartContainer = () => {
    const {cart, clearCart, deleteItem, totalPrice} = useContext(CartContext)
    
    let total = totalPrice()

    const vaciarCarrito = () => {

      Swal.fire({
        title: '¿Seguro que quieres borrar todos los items?',
        showDenyButton: true,
        confirmButtonText: 'Si, segur@',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          clearCart()
          Swal.fire('¡Listo!', 'Tus seleccionados han sido eliminados', 'success')
        } else if (result.isDenied) {
          Swal.fire('¡Los productos permanecen en el carrito!', '', 'info')
        }
      })
  
    }
    
    
    
    
  return <Cart cart={cart} deleteItem={deleteItem} vaciarCarrito={vaciarCarrito} total={total}/> 
}
export default CartContainer