import { useParams } from "react-router";
import Product from "./Product";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams()
  const [ product, setProduct ] = useState()

  async function fetchProduct() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    setProduct(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [id])

  if (!product) {
    return <div>Loading product...</div>
  }

  return (
    <div className="productDetails">
      <Product product={product} key={id} showUrl={false}></Product>
    </div>
  )
}