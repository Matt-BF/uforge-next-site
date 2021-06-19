import stylesCard from "../styles/SubproductCard.module.css";

const SubproductCard = ({ subproduct }) => {
  return (
    <div className={stylesCard.card}>
      <h2 className={stylesCard.cardTitle}>{subproduct.subproductName}</h2>
      <p className={stylesCard.cardText}>
        Preço do Kit: {subproduct.subproductPrice}
        <br />
        Número de reações: {subproduct.subproductSize}
        <br />
        Preço por reação: {subproduct.subproductPriceSample}
      </p>

      <p className={stylesCard.cardText}>
        Testado para: <br />
        {subproduct.subproductTests.map((test, idx) => (
          <span key={idx}>
            &bull; {test}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default SubproductCard;
