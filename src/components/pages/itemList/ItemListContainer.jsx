import ItemList from "./ItemList";
import { productos } from "../../../productos/Productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    let productosFiltrados = productos.filter(
      (elemento) => elemento.categoria === categoria
    );
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoria === undefined ? productos : productosFiltrados);
      }, 2000);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoria]);

  return <>
    <ItemList items={items} />
  
  </>
   
};
export default ItemListContainer;
