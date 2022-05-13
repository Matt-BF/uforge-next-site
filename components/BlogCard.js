import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { toPlainText } from "@portabletext/react";
import client from "../client";
import stylesBlogPage from "../styles/BlogPage.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const BlogCard = ({ post }) => {
  return (
    <div className={stylesBlogPage.linkCard}>
      <img
        className={stylesBlogPage.mainImg}
        src={urlFor(post.mainImage).url()}
        alt=""
      />
      <h2 className={stylesBlogPage.linkCardTitle}>{post.title}</h2>
      <p className={stylesBlogPage.linkCardSmall}>
        {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
      </p>
      <p className={stylesBlogPage.linkCardExcerpt}>
        {toPlainText(post.body[0]).slice(0, 100)}...
      </p>
      <p className={stylesBlogPage.linkCardSmall}>Leia mais</p>
    </div>
  );
};

export default BlogCard;
