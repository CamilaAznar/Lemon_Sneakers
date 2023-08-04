import estilo from "./Cart.module.css";

const Cart = ({ clearCart, cart, deleteItem }) => {
  return (
    <div>
      <div className={estilo.carrito}>
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className={estilo.contenedor}>
              <div>
                <img src={elemento.img} alt="" className={estilo.imagen} />
              </div>
              <div>
                <h2>{elemento.nombre}</h2>
                <h4>{elemento.precio}</h4>
              </div>
              <div className={estilo.cantidad}>
                <h3>{elemento.cantidad}</h3>
              </div>
              <button onClick={deleteItem}>X</button>
            </div>
          );
        })}
      </div>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
