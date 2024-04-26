import "./itemCounter.css"
const ProductCounter = ({ contador, setCounter, stock }) => {
    const counterIncrease = () => {
        contador < stock && setCounter(contador + 1);
    }

    const counterDecrese = () => {
        contador > 1 && setCounter(contador - 1);
    }

    return (
        <div>
            <button className="btn"  onClick={counterDecrese}>-</button>
            <span >{contador}</span>
            <button className="btn" onClick={counterIncrease}>+</button>
        </div>
    )
}

export default ProductCounter;