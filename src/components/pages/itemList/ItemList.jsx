import estilo from "./ItemList.module.css";
import ProductCard from "../../common/productCard/ProductCard";
import { Skeleton } from "@mui/material";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4]
  return <div className={items.length > 0 ? estilo.container : estilo.cargando}>
    {
      items.length > 0 ?
      items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        }) : arr.map((e) => {
          return(
            <div key={e}>
              <Skeleton animation="wave" variant="rounded" width={300} height={280}/>
              <Skeleton animation="wave" variant="text" sx={{ fontSize: "2.5rem", width: "280px" }}/>
              <Skeleton animation="wave" variant="text" sx={{ fontSize: "2rem", width: "220px" }}/>
              <Skeleton animation="wave" variant="text" sx={{ fontSize: "2rem", width: "170px" }}/>
            </div>
          )
        })
    }
  </div> 
}
export default ItemList