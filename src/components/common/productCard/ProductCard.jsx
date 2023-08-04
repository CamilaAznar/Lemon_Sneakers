import { Card } from "@mui/material"
import "./ProductCard.css"

import { Link } from "react-router-dom"

const ProductCard = ({ elemento }) => {
  return (
    <Link to={`/ItemDetail/${elemento.id}`} className="link">
      <Card className="card" > 
          <img src={elemento.img} alt="" />
          <div className="contenido">
            <h3>{elemento.nombre}</h3>
            <p className="desc">{elemento.descripcion}</p>
            <h4>Precio: ${elemento.precio}</h4>
        </div>
        
      </Card>
    
    </Link>
  )
}

export default ProductCard