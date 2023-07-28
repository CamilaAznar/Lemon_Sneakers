import { useState } from 'react';
import style from "./Categorias.module.css"
import { Link } from 'react-router-dom';
const Categorias = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.dropdown}>
      <button onClick={toggleDropdown} className={style.dropdownButton}>
        Categorias
      </button>
      {isOpen && (
        <ul className={style.dropdownList}>
            <Link to={"/Category/AirJordan"}><li>Air Jordan</li></Link> 
            <Link to={"/Category/NikeAir"}><li>Nike Air</li></Link>
            <Link to={"/Category/NikeRunning"}><li>Nike Running</li></Link> 
          
        </ul>
      )}
    </div>
  );
};

export default Categorias




