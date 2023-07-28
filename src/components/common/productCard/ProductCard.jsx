import { Card } from "@mui/material"
import "./ProductCard.css"

import { Link } from "react-router-dom"

const ProductCard = ({item}) => {
  return (
    <Link to={`/ItemDetail/${item.id}`} className="link">
      <Card className="card" > 
          <img src={item.img} alt="" />
          <div className="contenido">
            <h3>{item.nombre}</h3>
            <p className="desc">{item.descripcion}</p>
            <h4>Precio: ${item.precio}</h4>
        </div>
        
      </Card>
    
    </Link>
  )
}

export default ProductCard