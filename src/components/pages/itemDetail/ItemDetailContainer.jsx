import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { productos } from "../../../productos/Productos"
import {  useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {addToCart} = useContext(CartContext)
    const { id } = useParams()

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

        producto
        cantidad
    }






  
    return <ItemDetail producto={producto} onAdd={onAdd}/>
}

export default ItemDetailContainer