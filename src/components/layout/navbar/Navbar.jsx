import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import Categorias from "../navbar/categorias/Categorias"
import "./Navbar.css";
const Navbar = () => {
  let userRol = "user"  
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
      {
        userRol === "admin" && <Link to={"/Dashboard"}>ADMIN</Link>
      }

      
      <div className="cart">
        <CartWidget />
      </div>
      
      
    </div>
    
  );
};
export default Navbar;

