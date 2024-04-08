import "./Card.css";
import { Link } from "react-router-dom";
import {products as initialProducts} from "../data/products.json"

const product = initialProducts

function Card({ title = "titulo por defecto", description = "descripcion por defecto"}) {
    
    return (<div className="Card" key={product.id}>
        <Link to = {`/product/${product.id}`}>
        <h2 className="cont">{title}</h2>        
        </Link> 
        <p className="cont">{description}</p>
        </div>);
}

export default Card;