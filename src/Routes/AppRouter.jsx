import { Route, Routes } from "react-router-dom";
import AboutUsContainer from "../components/pages/aboutUs/AboutUsContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import Cart from "../components/pages/cart/Cart";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";

const AppRouter = () => {
  return <Routes>
    <Route path="/AboutUs" element={<AboutUsContainer />} />
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/Category/:categoria" element={<ItemListContainer />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
  </Routes>;
};

export default AppRouter;
