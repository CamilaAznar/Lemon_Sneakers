import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import AppRouter from "./Routes/AppRouter";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar/>
      <AppRouter/>
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
