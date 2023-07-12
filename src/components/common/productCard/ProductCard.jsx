import { Card } from "@mui/material"
import "./ProductCard.css"

const ProductCard = ({item}) => {
  return (
    <Card className="card" >
        <img src={item.img} alt="" />
        <div className="contenido">
            <h3>{item.nombre}</h3>
            <h4>${item.precio}</h4>
            <p>{item.descripcion}</p>
        </div>
        <button> Agregar Al Carrito</button>
    </Card>
  )
}

export default ProductCard