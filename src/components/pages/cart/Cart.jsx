import estilo from "./Cart.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";



const Cart = ({ cart, deleteItem, vaciarCarrito, total }) => {
  

  return (
    <div>
      <div className={estilo.carrito}>
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className={estilo.contenedor}>
              <div>
                <img src={elemento.img} alt="" className={estilo.imagen} />
              </div>
              <div className={estilo.desc}>
                <h2>{elemento.nombre}</h2>
                <h4>{elemento.precio}</h4>
              </div>
              <div className={estilo.cantidad}>
                <h3>{elemento.cantidad}</h3>
              </div>
              <Button
                onClick={() => deleteItem(elemento.id)}
                color="error"
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </div>
          );
        })}
      <div>
        <h4>El total de la compra: {total} </h4>
      </div>
      </div>
      {
        cart.length > 0 && <button onClick={vaciarCarrito}>Vaciar carrito</button>
      }
      
    </div>
  );
};

export default Cart;
