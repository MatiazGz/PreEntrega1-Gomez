import {products as initialProducts} from "../data/products.json";
import Card from "./Card";

const ItemListContainer = () => {
  const itemList = initialProducts.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });
  return <div className="container">{itemList}</div>;
};

export default ItemListContainer;
