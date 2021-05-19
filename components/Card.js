import stylesCard from '../styles/Card.module.css'

const Card = ({title, text}) => {
    return (
        <div className={stylesCard.card}>
            <h2 className={stylesCard.cardTitle}>{title}</h2>
            <p className={stylesCard.cardText}>{text}</p>
        </div>
    )
}

export default Card
