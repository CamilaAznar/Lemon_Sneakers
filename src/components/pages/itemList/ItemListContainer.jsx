
import ItemList from "./ItemList";
import { productos } from "../../../productos/Productos";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [error, setError] = useState("")


  useEffect(()=>{
    const tarea = new Promise((resolve, reject) => {
      resolve(productos);
      // reject("Salio todo mal :(")
    });
  
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [])
  
  return <ItemList items={items} />;
};
export default ItemListContainer;
