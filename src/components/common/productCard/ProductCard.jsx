import { Card } from "@mui/material"
import "./ProductCard.css"
import CounterContainer from "../counter/CounterContainer"
import { Link } from "react-router-dom"

const ProductCard = ({item}) => {
  return (
    <Link to={`/ItemDetail/${item.id}`}>
      <Card className="card" > 
          <img src={item.img} alt="" />
          <div className="contenido">
            <h3>{item.nombre}</h3>
            <h4>Precio: ${item.precio}</h4>
            <p>{item.descripcion}</p>
        </div>
        <CounterContainer stock={item.stock} />
      </Card>
    
    </Link>
  )
}

export default ProductCard