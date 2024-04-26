import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ producto }) => {
  return (
    <div className="card">
      <div key={producto.id} className="card">
        <div className="imagenContainer">
          <img
            src={producto.imageURL}
            alt={producto.title}
            className="cardImagen"
          />
        </div>
        <div className="cardBody">
          <h2 className="titulo">{producto.title}</h2>
          <p className="precio">${producto.price}</p>
          <Link to={`/item/${producto.id}`} className="Link">
            ver mas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
