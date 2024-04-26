const ProductCounter = ({ contador, setCounter, stock }) => {
    const counterIncrease = () => {
        contador < stock && setCounter(contador + 1);
    }

    const counterDecrese = () => {
        contador > 1 && setCounter(contador - 1);
    }

    return (
        <div>
            <button onClick={counterDecrese}>-</button>
            <span >{contador}</span>
            <button onClick={counterIncrease}>+</button>
        </div>
    )
}

export default ProductCounter;