import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";

export default function App() {
  const [products, setProducts] = useState([]) //state for holding the posts
  async function fetchProducts() { //async function to get posts
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
  }
  useEffect(() => {
    fetchProducts()
  }, []) //run once on page load
  return (
    <div>
      {products.map(product => <Product product={product}/> )}
    </div>
  );
}
