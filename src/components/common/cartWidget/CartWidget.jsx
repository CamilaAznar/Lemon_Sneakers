import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  let total = totalQuantity() 
  return (
    <Link to={"/Cart"}>
      <Badge badgeContent={total} color="secondary">
        <BsCartFill color="white" size={25} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
