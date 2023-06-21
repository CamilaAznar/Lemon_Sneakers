import Navbar from "./components/layout/navbar/Navbar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemList from "./components/pages/itemList/ItemList";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
function App() {

  
  return (
    <div>
      <Navbar/>
      <ItemList />
      <ItemDetail/>
      <ItemListContainer greeting="saludo"/>
    </div>
  );
}

export default App;
