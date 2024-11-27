import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import ListControls from "./components/ListControls";

export default function App() {
  const [products, setProducts] = useState([]) //state for holding the posts
  const [filteredProducts, setFilteredProducts] = useState([])
  async function fetchProducts() { //async function to get posts
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
    setFilteredProducts(products)
  }
  useEffect(() => {
    fetchProducts()
  }, []) //run once on page load
  return (
    <div>
      <ListControls setProducts={setFilteredProducts} products={products}/>
      {products.map(product => <Product product={product}/> )}
    </div>
  );
}
