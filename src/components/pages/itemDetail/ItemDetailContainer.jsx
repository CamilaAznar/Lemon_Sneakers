import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { productos } from "../../../productos/Productos"
import {  useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {addToCart, getQuantityById} = useContext(CartContext)

    
    
    const { id } = useParams()
    
    
    const totalQuantity = getQuantityById(id)

    useEffect(()=>{
        let productoSeleccionado = productos.find((el)=> el.id === Number(id) )
        const tarea = new Promise ((resolve)=> {
            resolve(productoSeleccionado)
        })
        tarea.then(respuesta => setProducto(respuesta))
    }, [id])

    const onAdd = (cantidad) => {
        let productCard = {...producto, cantidad:cantidad}
        addToCart(productCard)
        toast.success('¡Producto Agregado Exitosamente!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
    }






  
    return <>
        <ItemDetail producto={producto} onAdd={onAdd} totalQuantity={totalQuantity}/>
        <ToastContainer/>
    </>
}

export default ItemDetailContainer