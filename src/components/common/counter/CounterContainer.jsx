import { useState } from "react"
import Counter from "./Counter"


const CounterContainer = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const sumar = () => {
      contador<stock? setContador(contador+1): alert("cantidad inexistente")
    }
    const restar = () =>{
      contador > 1 && setContador(contador-1)
    }
    


  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>
  )
}

export default CounterContainer