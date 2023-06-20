import "./CartWidget.css";
import { BsCartFill } from "react-icons/bs";


const CartWidget = () => {
  return (
    <div className="Carrito">
      <BsCartFill color="white" size={20} title="Carrito"/>
    </div>
  );
};

export default CartWidget;
