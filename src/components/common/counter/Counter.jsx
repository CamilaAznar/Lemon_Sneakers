

const Counter = ({contador, sumar, restar, onAdd}) => {
  return (
    <div>
        <h3>{contador}</h3>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={()=> onAdd(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter