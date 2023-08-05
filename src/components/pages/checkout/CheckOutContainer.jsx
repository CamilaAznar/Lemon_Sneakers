import { useState } from "react";
import Checkout from "./Checkout";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {addDoc, collection, doc, serverTimestamp, updateDoc} from "firebase/firestore"

const CheckoutContainer = () => {

  const {cart, totalPrice} = useContext(CartContext)
  const [orderId, setOrderId] = useState("")

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  let total = totalPrice()

  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp()
    }
   
    const orderCollection = collection(db, "orders" )
    addDoc(orderCollection, order).then((res)=> setOrderId(res.id))


    cart.forEach(producto => {
      updateDoc(doc(db, "productos", producto.id) , {stock: producto.stock - producto.cantidad})
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };
  

  return <Checkout handleChange={handleChange} handleSubmit={handleSubmit} orderId={orderId} />;
};

export default CheckoutContainer;
