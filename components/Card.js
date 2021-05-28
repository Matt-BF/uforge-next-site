import stylesCard from "../styles/Card.module.css";

const Card = ({ title, subtitle, text }) => {
  return (
    <div className={stylesCard.card}>
      <h2 className={stylesCard.cardTitle}>{title}</h2>
      <h3 className={stylesCard.cardSubtitle}>
        <strong>{subtitle}</strong>
      </h3>
      <p className={stylesCard.cardText}>{text}</p>
    </div>
  );
};

export default Card;
