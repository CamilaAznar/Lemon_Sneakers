import { productos } from "../../../productos/Productos"
import {addDoc, collection} from "firebase/firestore"
import { db } from "../../../firebaseConfig"

const Dashboard = () => {
    const rellenar = () => {
        productos.forEach((producto)=>{
            let refCollection = collection(db, "productos")
            addDoc(refCollection, producto)
        })
    }



  return (
    <button onClick={rellenar}>Rellenar base de datos</button>
  )
}

export default Dashboard