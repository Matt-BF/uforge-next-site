import stylesCard from "../styles/BlogCard.module.css";

const BlogCard = ({ title, link, date }) => {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={link}>
        <div className={stylesCard.card}>
          <h2 className={stylesCard.cardTitle}>{title}</h2>
          <p className={stylesCard.cardText}>Publicado em {date}</p>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
