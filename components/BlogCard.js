import stylesCard from "../styles/BlogCard.module.css";

const BlogCard = ({ title, link, date }) => {
  return (
    <div className={stylesCard.card}>
      <a
        className={stylesCard.link}
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        <h2 className={stylesCard.cardTitle}>{title}</h2>
        <p className={stylesCard.cardText}>Publicado em {date}</p>
      </a>
    </div>
  );
};

export default BlogCard;
