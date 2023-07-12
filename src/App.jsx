import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Navbar from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <ItemListContainer/>} /> 
        <Route path="/Category/:categoria" element={<ItemListContainer/>} />
        <Route path="/Cart" element={ <Cart/>}/>
        <Route path="/ItemDetail/:id" element={ <ItemDetailContainer /> } />
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
