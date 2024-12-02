import { Link } from "react-router"
import "../App.css"
export default function Product(props) {
    let product = props.product
    return(
        <div className="product">
            <h3>{product.title}</h3><span className="price"> ${product.price}</span>
            <img src={product.image}/>
            <p>{product.description}</p>
            <div className="subText">Category: {product.category}, Product ID: {product.id}</div>
            { (props.showUrl) ? <Link to={`/details/${product.id}`}>View Details</Link>:<Link to={`/`}>Return</Link>}
        </div>
    )
}