import "./Counter.css"


const Counter = ({contador, sumar, restar, onAdd}) => {
  return (
    <div className="contadorContainer">
      <div className="contador">
        <button onClick={restar} className="sumaResta">-</button>
        <h3>{contador}</h3>
        <button onClick={sumar} className="sumaResta">+</button>
      </div>
      <div className="AgregarAlCarrito">
        <button onClick={()=> onAdd(contador)} className="carrito"> Agregar al carrito</button>
      </div>
    </div>
    
      
    
  )
}

export default Counter