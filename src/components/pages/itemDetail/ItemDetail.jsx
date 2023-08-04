import  estilos from "./ItemDetail.module.css"
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({producto, onAdd, totalQuantity}) => {

  return (
    <div className={estilos.contenedor}>
      <div className={estilos.imagenes}>
        <img src={producto.img} alt="" />
        <img src={producto.img2} alt="" />
        <img src={producto.img3} alt="" />
        <img src={producto.img4} alt="" />
      </div>
      <div className={estilos.descripcion}>
        <h2 className={estilos.nombre}>{producto.nombre}</h2>
        <h4 className={estilos.desc}>{producto.descripcion}</h4>
        <h3>${producto.precio}</h3>
        <CounterContainer stock={producto.stock} onAdd={onAdd} initial={totalQuantity}/>
        
      </div>
    </div>
  )
};

export default ItemDetail;
