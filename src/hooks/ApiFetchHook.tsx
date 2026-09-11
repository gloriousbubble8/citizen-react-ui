import { useEffect, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

interface ResponseData {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

function ApiFetchHook() {
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponseData(data);
      });
  }, []);

  return (
    <div>
      <h1>Products Table</h1>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Title</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {responseData?.products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.thumbnail} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiFetchHook;
