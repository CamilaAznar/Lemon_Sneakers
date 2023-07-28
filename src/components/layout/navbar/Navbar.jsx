import { Link, Outlet } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import Categorias from "../navbar/categorias/Categorias"
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categorias">
        <Categorias/>
      </div>
      <div className="contenedor">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/AboutUs"}>About Us</Link>
          <Link>Contact Us</Link>
        </ul>
        
      </div>
      <div className="cart">
        <CartWidget />
      </div>
      <Outlet/>
      
    </div>
    
  );
};
export default Navbar;

