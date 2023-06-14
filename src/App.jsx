
import { useState } from "react";
import  Navbar  from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import Home from "./components/pages/home/Home"
import ItemList from "./components/pages/itemList/ItemList";

function App() {

  const [saludo, setSaludo] = useState("hola como estas?")

  return <div>
    <Navbar/>
    <Home nombre= {"juancito"} apellido = {"Perez"}/>
    <Cart />
    <ItemList saludo={setSaludo}/>
  </div>
   
}

export default App;
