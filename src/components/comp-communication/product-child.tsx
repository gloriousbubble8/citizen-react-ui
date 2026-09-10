import type { Product } from "./entities/Product";

function ProductChild({ product }: { product: Product }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#d0e2da",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <h3>{product.id}</h3>
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
        <h3>{product.category}</h3>
        <button>Delete</button>
      </div>
    </>
  );
}

export default ProductChild;
