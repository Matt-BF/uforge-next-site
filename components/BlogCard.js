import stylesCard from "../styles/BlogCard.module.css";

const BlogCard = ({ title, link, date }) => {
  return (
    <div>
      <div className={stylesCard.card}>
        <a target="_blank" rel="noreferrer" href={link}>
          <h2 className={stylesCard.cardTitle}>{title}</h2>
          <p className={stylesCard.cardText}>Publicado em {date}</p>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
