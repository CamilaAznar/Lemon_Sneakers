import { Link } from "react-router-dom";
import estilo from "./Checkout.module.css";


const Checkout = ({ orderId, handleChange, handleSubmit }) => {
  return (
    <div>
      {orderId ? (
        <div className={estilo.confirmacion_pedido}>
          <h2>¡Pedido confirmado!</h2>
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/906/151/large_2x/tick-icon-accept-approve-sign-design-free-free-png.png"
            alt="Tilde verde"
            className={estilo.tick_icon}
          />
          <h3>Su numero de pedido es: {orderId}</h3>
          <Link to={"/"}> Volver a comprar </Link>
        </div>
      ) : (
        <div className={estilo.contenedor}>
          <form onSubmit={handleSubmit} className={estilo.formulario}>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingrese su telefono"
              name="phone"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Ingrese su e-mail"
              name="email"
              onChange={handleChange}
            />
            <button type="submit">Comprar</button>
            
          </form>
        </div>
      )}
    </div>
  );
};
export default Checkout;
