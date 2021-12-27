import stylesCard from "../styles/Card.module.css";

const Card = ({ right, imgSrc, subtitle, text }) => {
  return (
    <div
      className={
        right === "true"
          ? `${stylesCard.cardR} ${stylesCard.card}`
          : `${stylesCard.card}`
      }
    >
      <img
        className={
          right === "true" ? `${stylesCard.cardImgR}` : `${stylesCard.cardImgL}`
        }
        src={imgSrc}
        alt=""
      />
      <div className={stylesCard.cardTextWrapper}>
        <h3 className={stylesCard.cardSubtitle}>
          <strong>{subtitle}</strong>
        </h3>
        <p className={stylesCard.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
