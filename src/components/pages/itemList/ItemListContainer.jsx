import ItemList from "./ItemList";
import { productos } from "../../../productos/Productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItem] = useState([]);

  const { categoria } = useParams();
  console.log(categoria);

  useEffect(() => {
    let productosFiltrados = productos.filter(
      (elemento) => elemento.categoria === categoria
    );
    const tarea = new Promise((resolve) => {
      resolve(categoria === undefined ? productos : productosFiltrados);
    });

    tarea
      .then((respuesta) => setItem(respuesta))
      .catch((error) => console.log(error));
  }, [categoria]);

  return <ItemList items={items} />;
};
export default ItemListContainer;
