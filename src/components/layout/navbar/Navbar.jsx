import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="categorias">
        <button>Adidas</button>
        <button>Nike</button>
        <button>Puma</button>
      </div>
      <div className="contenedor">
        <ul>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </ul>
        
      </div>
      <div className="carrito">
        <CartWidget />
      </div>
      
    </div>
    
  );
};
export default Navbar;
