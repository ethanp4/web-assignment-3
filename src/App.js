import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import ListControls from "./components/ListControls";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Details from "./components/Details";

function Main() {
  const [products, setProducts] = useState(null) //state for holding the posts
  const [filteredProducts, setFilteredProducts] = useState(null)
  async function fetchProducts() { //async function to get posts
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
    setFilteredProducts(data)
  }
  useEffect(() => {
    fetchProducts()
  }, []) //run once on page load

  if (!products) {
    return(<div>Loading products...</div>)
  }

  return (
    <>
    <div>
      <ListControls setProducts={setFilteredProducts} products={products}/>
    </div>
    <div>
      {filteredProducts.map(product => <Product product={product} key={product.id} showUrl={true}/> )}
    </div>
  </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Main/>}/>
      <Route path="details/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>

  );
}
