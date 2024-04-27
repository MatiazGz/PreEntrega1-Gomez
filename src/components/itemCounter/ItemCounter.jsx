import "./itemCounter.css";
const ProductCounter = ({ contador, setContador, stock }) => {
  const counterIncrease = () => {
    contador < stock && setContador(contador + 1);
  };

  const counterDecrese = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div>
      <button className="Link" onClick={counterDecrese}>
        -
      </button>
      <span className="cval">{contador}</span>
      <button className="Link" onClick={counterIncrease}>
        +
      </button>
    </div>
  );
};

export default ProductCounter;
