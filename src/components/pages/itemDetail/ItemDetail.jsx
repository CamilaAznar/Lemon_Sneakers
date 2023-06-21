import CounterContainer from "../../common/counter/CounterContainer"


const ItemDetail = () => {
    let producto = {
        nombre: "remera",
        precio: 3000,
        stock: 15
    }

    const onAdd = (cantidad) => {
        console.log(producto)
        console.log(cantidad)
    }
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <h3>{producto.precio}</h3>
        <CounterContainer stock={producto.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail