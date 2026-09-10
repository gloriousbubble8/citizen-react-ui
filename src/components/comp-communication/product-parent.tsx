import type { Product } from "./entities/Product";
import ProductChild from "./product-child";

function ProductParent() {
  const products: Product[] = [
    { id: "P001", name: "Wireless Mouse", price: 599, category: "Electronics" },
    {
      id: "P002",
      name: "Mechanical Keyboard",
      price: 2499,
      category: "Electronics",
    },
    {
      id: "P003",
      name: "USB-C Charging Cable",
      price: 299,
      category: "Electronics",
    },
    {
      id: "P004",
      name: "Bluetooth Headphones",
      price: 1899,
      category: "Electronics",
    },
    { id: "P005", name: "Cotton T-Shirt", price: 499, category: "Apparel" },
    { id: "P006", name: "Denim Jeans", price: 1299, category: "Apparel" },
    { id: "P007", name: "Running Shoes", price: 2999, category: "Footwear" },
    { id: "P008", name: "Leather Wallet", price: 899, category: "Accessories" },
    {
      id: "P009",
      name: "Stainless Steel Bottle",
      price: 449,
      category: "Home",
    },
    { id: "P010", name: "Ceramic Coffee Mug", price: 249, category: "Home" },
    { id: "P011", name: "Yoga Mat", price: 799, category: "Fitness" },
    { id: "P012", name: "Dumbbell Set 10kg", price: 3499, category: "Fitness" },
    {
      id: "P013",
      name: "Notebook Pack of 3",
      price: 199,
      category: "Stationery",
    },
    { id: "P014", name: "Gel Pen Set", price: 99, category: "Stationery" },
    { id: "P015", name: "Backpack 30L", price: 1599, category: "Accessories" },
    {
      id: "P016",
      name: "Sunglasses UV400",
      price: 699,
      category: "Accessories",
    },
    { id: "P017", name: "Table Lamp LED", price: 899, category: "Home" },
    { id: "P018", name: "Wall Clock", price: 599, category: "Home" },
    {
      id: "P019",
      name: "Face Wash 100ml",
      price: 349,
      category: "Personal Care",
    },
    {
      id: "P020",
      name: "Electric Toothbrush",
      price: 1499,
      category: "Personal Care",
    },
  ];

  return (
    <div>
      {products.map((product) => {
        return <ProductChild product={product} />;
      })}
    </div>
  );
}

export default ProductParent;
