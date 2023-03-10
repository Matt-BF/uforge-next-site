import stylesCard from "../styles/SubproductCard.module.css";

const SubproductCard = ({ subproduct }) => {
  return (
    <div className={stylesCard.card}>
      <h2 className={stylesCard.cardTitle}>{subproduct.subproductName}</h2>
      <p className={stylesCard.cardText}>
        {subproduct.subproductSize != "" && (
          <>
            <span className={stylesCard.spanText}>Tamanho: </span>
            {subproduct.subproductSize}
          </>
        )}
        <br />
      </p>

      <p className={stylesCard.cardText}>
        {subproduct.subproductTests.length > 0 && (
          <span>
            <br />
            <span className={stylesCard.spanText}>Testado para:</span> <br />
            {subproduct.subproductTests.map((test, idx) => (
              <span key={idx}>
                &bull; {test}
                <br />
              </span>
            ))}
          </span>
        )}
      </p>
      <p className={stylesCard.cardText}>
        {subproduct.subproductUses.length > 0 && (
          <span>
            <br />
            <span className={stylesCard.spanText}>Exemplos de usos:</span>{" "}
            <br />
            {subproduct.subproductUses.map((use, idx) => (
              <span key={idx}>
                &bull; {use}
                <br />
              </span>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};

/*<span className={stylesCard.spanText}>Preço:</span>{" "}
        {subproduct.subproductPrice}
        <br />*/
export default SubproductCard;
