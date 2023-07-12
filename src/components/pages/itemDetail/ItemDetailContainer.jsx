import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { productos } from "../../../productos/Productos"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(()=>{
        let productoSeleccionado = productos.find((el)=> el.id === Number(id) )
        const tarea = new Promise ((resolve)=> {
            resolve(productoSeleccionado)
        })
        tarea.then(respuesta => setProducto(respuesta))
    }, [id])








  
    return <ItemDetail producto={producto}/>
}

export default ItemDetailContainer