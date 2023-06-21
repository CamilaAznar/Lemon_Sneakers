import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = ({children}) => {
  return (
    <div className="navbar">
      <div className="Contenedor">
        <ul>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </ul>
        <CartWidget />
        {children}
      </div>
      
    </div>
    
  );
};
export default Navbar;
