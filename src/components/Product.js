import "../App.css"
export default function Product(props) {
    let product = props.product
    return(
        <div className="product">
            <h3>{product.title}</h3><span className="price"> ${product.price}</span>
            <img src={product.image}/>
            <p>{product.description}</p>
            <div className="subText">Product ID: {product.id}</div>
        </div>
    )
}