import { useParams } from "react-router";
import { useEffect, useState } from "react";
import data from "../data/products.json";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams;

  useEffect(() => {
    if (categoryId) {
      const productsFilteredByCategory = data.filter(
        (product) => product.category == categoryId
      );
      setProducts(productsFilteredByCategory);
    } else {
      setProducts(data);
    }
  }, [categoryId]);

  return (
    <Container>
      <h1>Nuestros productos</h1>
      <Container className="d-flex flex-wrap">
        {products.map((product) => (
          <Card key={product.id} style={{ flex: 1 }}>
            <Card.Img variant="top" src={product.image} height="200" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.detail}</Card.Text>
              <Card.Text>{product.category}</Card.Text>
              <Link to={`/products/${product.id}`}>
                <Button className= "bg-dark" variant="primary">detalle</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Container>
  );
};
