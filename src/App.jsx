
import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/ItemList";
function App() {
  const [saludo, setSaludo] = useState("Hola Usuario")

  return (
    <div>
      
      <Navbar />
      <ItemList saludo={saludo}/>
    </div>
  );
}

export default App;
