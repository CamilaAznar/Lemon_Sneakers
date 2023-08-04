import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const {cart} = useContext(CartContext)

  return (
    <Link to={"/Cart"}>
      <Badge badgeContent={cart.length} color="secondary">
        <BsCartFill color="white" size={25} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
