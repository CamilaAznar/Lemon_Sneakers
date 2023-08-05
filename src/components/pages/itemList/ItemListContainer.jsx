import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../../firebaseConfig"
import { getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(db, "productos");
  

    let consulta;
    if(categoria){
      consulta = query( coleccionProductos , where("categoria", "==", categoria)) 
    }else{
      consulta = coleccionProductos
    }

    getDocs(consulta).then((res)=>{
      let productos = res.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })

      setItems(productos)
    })

  }, [categoria]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
export default ItemListContainer;
