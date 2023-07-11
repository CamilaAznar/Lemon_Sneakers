import Navbar from "./components/layout/navbar/Navbar";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";

import ItemListContainer from "./components/pages/itemList/ItemListContainer";


function App() {

  
  return (
    <div>
      <Navbar/>
      <ItemListContainer />
      <ItemDetail/>
    </div>
  );
}

export default App;
