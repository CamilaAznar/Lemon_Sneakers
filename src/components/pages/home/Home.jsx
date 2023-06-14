import "./Home.css"
import {useState } from "react"

const Home = ({nombre, apellido}) => {



  let [ contador, funcion_contador ] = useState(0)
  const [name, setName] = useState("pepe")

  const sumar = () =>{
    funcion_contador(contador + 1)
  }


  return (
    <>
      <h3>Este es el home</h3>
      <h3>el cntador esta en {contador}</h3>
      <h1> {nombre} y {apellido} </h1>
      <h3>el nombre es {name} </h3>
      <button onClick={()=> setName("Maria")}>Cambiar a maria</button>
      <button onClick={sumar}>sumar contador</button>
    </>
  )
}

export default Home