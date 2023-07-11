import { Card } from "@mui/material";
import  "./itemListContainer.css"

const ItemList = ({ items }) => {
  return (
    <div className="container">
      {items.map((item) => {
        return (
          <Card className="card" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <h5>{item.precio}</h5>
            
            <button> agregar al carrito</button>

            
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
