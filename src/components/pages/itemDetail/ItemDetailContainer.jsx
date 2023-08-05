import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import {  useParams, useNavigate } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {db} from "../../../firebaseConfig"
import { getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {addToCart, getQuantityById} = useContext(CartContext)

    
    const { id } = useParams()
    const navigate = useNavigate()

    
    const totalQuantity = getQuantityById(id)

    useEffect(()=>{
       let productosColeccion = collection(db, "productos")
       let productoRef = doc( productosColeccion, id)
       getDoc(productoRef).then( res => {
        let producto = {...res.data() , id: res.id }
        setProducto(producto)
       })


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
        navigate("/Cart")
    }
  
    return <>
        <ItemDetail producto={producto} onAdd={onAdd} totalQuantity={totalQuantity}/>
        <ToastContainer/>
    </>
}

export default ItemDetailContainer