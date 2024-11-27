import { useState } from "react"

export default function ListControls() {
  const [filterField, setFilterField] = useState('Category')
  return(
    <div>
      Filter by:
      <select defaultValue="Category" onChange={(e) => setFilterField(e.target.value)}>
        <option value="Title">Title</option>
        <option value="Description">Description</option>
        <option value="Category">Category</option>
      </select>
      <input placeholder={`Search within ${filterField}`}></input>
      <button>Ascending</button>
    </div>
  )
}