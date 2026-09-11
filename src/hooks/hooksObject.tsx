import { useState } from "react";

function HooksObject() {
  let [product, setProduct] = useState({
    id: "P002",
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
  });

  function updateProduct(price: number) {
    setProduct({ ...product, price });
  }

  return (
    <div>
      <h3>{product.id}</h3>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <h3>{product.category}</h3>
      <input
        type="number"
        placeholder="Enter Product ID here..."
        onChange={(event) => updateProduct(Number(event.target.value))}
      />
    </div>
  );
}

export default HooksObject;
