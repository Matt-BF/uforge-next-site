import stylesCard from "../styles/SubproductCard.module.css";

const SubproductCard = ({ subproduct }) => {
  return (
    <div className={stylesCard.card}>
      <h2 className={stylesCard.cardTitle}>{subproduct.subproductName}</h2>
      <p className={stylesCard.cardText}>
        Preço do Kit: {subproduct.subproductPrice}
      </p>
      <p className={stylesCard.cardText}>
        Número de reações: {subproduct.subproductSize}
      </p>
      <p className={stylesCard.cardText}>
        Preço por reação: {subproduct.subproductPriceSample}
      </p>
    </div>
  );
};

export default SubproductCard;
