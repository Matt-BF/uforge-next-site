import stylesCard from "../styles/SubproductCard.module.css";

const SubproductCard = ({ subproduct }) => {
  return (
    <div className={stylesCard.card}>
      <h2 className={stylesCard.cardTitle}>{subproduct.subproductName}</h2>
      <p className={stylesCard.cardText}>
        Preço: {subproduct.subproductPrice}
        <br />
        {subproduct.subproductSize != "" && (
          <span>Tamanho: {subproduct.subproductSize}</span>
        )}
        <br />
        {subproduct.subproductPriceSample != "" && (
          <span>Preço por reação: {subproduct.subproductPriceSample}</span>
        )}
      </p>

      <p className={stylesCard.cardText}>
        {subproduct.subproductTests.length > 0 && (
          <span>
            <br />
            Testado para: <br />
            {subproduct.subproductTests.map((test, idx) => (
              <span key={idx}>
                &bull; {test}
                <br />
              </span>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};

export default SubproductCard;
