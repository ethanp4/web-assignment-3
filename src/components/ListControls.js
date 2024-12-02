import { useState } from "react"

export default function ListControls(props) {
  const setProducts = props.setProducts
  const products = props.products
  const [filterField, setFilterField] = useState('Category')
  const [filterText, setFilterText] = useState('')
  const [sortOrder, setSortOrder] = useState('0')

  function filterProducts() {
    // console.log(text)
    let ret = []
    if (filterText == "") {
      ret = [...products] //copy original to ret
    } else {
      switch (filterField) {
        case "Category":
          products.forEach(e => {
            if (e.category.toLowerCase().includes(filterText.toLowerCase())) {
              ret.push(e)
            }
          });
        break;
        case "Description":
          products.forEach(e => {
            if (e.description.toLowerCase().includes(filterText.toLowerCase())) {
              ret.push(e)
            }
          });
        break;
        case "Title":
          products.forEach(e => {
            if (e.title.toLowerCase().includes(filterText.toLowerCase())) {
              ret.push(e)
            }
          });
        break;
      }
    }

    if (sortOrder === "Ascending") { //sort if necessary
      console.log("sorting ascending")
      ret.sort((a, b) => {return (a.price - b.price)})
    } else if (sortOrder === "Descending") {
      console.log("sorting descending")
      ret.sort((a, b) => {return (b.price - a.price)})
    }

    console.log("filtered products")
    console.log(`sort order is ${sortOrder}`)
    setProducts(ret)
  }

  return(
    <div>
      Filter by:
      <select defaultValue="Category" onChange={(e) => setFilterField(e.target.value)}>
        <option value="Title">Title</option>
        <option value="Description">Description</option>
        <option value="Category">Category</option>
      </select>
      <input placeholder={`Search within ${filterField}`} onChange={(e) => {setFilterText(e.target.value); filterProducts()}}></input>
      <br/>Sort price by: 
      <select onChange={(e) => {setSortOrder(e.target.value)}}>
        <option value="None">None</option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
      <button onClick={filterProducts}>Sort!</button>
    </div>
  )
}