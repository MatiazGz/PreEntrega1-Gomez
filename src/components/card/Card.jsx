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
          <h3 className="titulo">{producto.title}</h3>
          <h2 className="precio">${producto.price}</h2>
          <Link to={`/item/${producto.id}`} className="Link">
            Mas información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
