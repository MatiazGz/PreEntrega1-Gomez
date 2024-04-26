import Card from '../card/Card';
import "./itemList.css"

const ItemList = ({ products }) => {
    return (
        <div className="gridContainer">
            {Array.isArray(products) && products.length > 0 && (
                products.map((product) => (
                    <Card key={product.id} producto={product} />
                ))
            )}
        </div>
    );
};

export default ItemList;