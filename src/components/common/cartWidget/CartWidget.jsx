import "./CartWidget.css";
import { BsCartFill } from "react-icons/bs";


const CartWidget = () => {
  return (
    <div className="carrito">
      <BsCartFill color="white" size={20} title="Carrito"/>
      <p>0</p>
    </div>
  );
};

export default CartWidget;
