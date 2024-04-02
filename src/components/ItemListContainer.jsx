import items from "../data/items";
import Card from "./Card";

const ItemListContainer = () => {
  const itemList = items.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });
  return <div className="container">{itemList}</div>;
};

export default ItemListContainer;
