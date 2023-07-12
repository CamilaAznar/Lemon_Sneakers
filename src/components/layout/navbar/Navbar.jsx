import { Link, Outlet } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categorias">
        <Link to={"/Category/AirJordan"}><button>Air Jordan</button></Link>
        <Link to={"/Category/NikeAir"}><button>Nike Air</button></Link>
        <Link to={"/Category/NikeRunning"}><button>Nike Running</button></Link>
      </div>
      <div className="contenedor">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
        </ul>
        
      </div>
      <div className="carrito">
        <CartWidget />
      </div>
      <Outlet/>
      
    </div>
    
  );
};
export default Navbar;
