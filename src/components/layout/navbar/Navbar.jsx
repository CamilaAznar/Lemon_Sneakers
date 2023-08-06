import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import Categorias from "../navbar/categorias/Categorias"
import "./Navbar.css";
import { FaLemon } from 'react-icons/fa';


const Navbar = () => {
  let userRol = "user"  
  return (
    <div className="navbar">
      <div className="categorias">
        <Categorias/>
      </div>
      <div className="contenedor">
        <ul>
          <FaLemon color="white" size={25}/>  
          <Link to={"/"}>Lemon Sneakers</Link>
          
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

