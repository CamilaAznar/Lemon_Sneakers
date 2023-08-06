import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckOutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/Category/:categoria" element={<ItemListContainer />} />
      <Route path="/Cart" element={<CartContainer />} />
      <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
      <Route path="/Checkout" element={<CheckoutContainer />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
};

export default AppRouter;
