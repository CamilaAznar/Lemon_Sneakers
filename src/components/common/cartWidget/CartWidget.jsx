import { Badge } from "@mui/material";
import { BsCartFill } from "react-icons/bs";


const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="secondary">
      <BsCartFill color="white" size={25}/>
    </Badge>
  );
};

export default CartWidget;
