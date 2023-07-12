import { Card } from "@mui/material";

import "./ItemListContainer.css"
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    
    <div>
      <h1 style={{justifyContent: "center", display: "flex"}}>Productos Nike</h1>
      
      <div className="container">
      
      {items.map((item) => {
        return (
          <ProductCard key={item.id} item={item}/>
        );
      })}
    </div>
    </div>
    
  );
};

export default ItemList;
