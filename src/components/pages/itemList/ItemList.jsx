import { useState } from "react";

const ItemList = () => {
  const [edad, setEdad] = useState(18)



  return (
    <>
      <h4>{edad}</h4>
    </>
  )
}

export default ItemList