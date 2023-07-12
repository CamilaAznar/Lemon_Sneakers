import { Badge } from "@mui/material";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={"/Cart"}>
      <Badge badgeContent={4} color="secondary">
        <BsCartFill color="white" size={25} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
