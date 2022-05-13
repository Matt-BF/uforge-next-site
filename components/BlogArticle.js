import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../client";
import stylesBlogArticle from "../styles/BlogArticle.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

// `components` object you'll pass to PortableText
const components = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => (
      <p className={stylesBlogArticle.articleText}>{children}</p>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          className={stylesBlogArticle.articleImg}
          src={urlFor(value)}
        />
      );
    },
  },
};

const BlogArticle = ({ post }) => {
  const {
    title,
    name,
    authorImage,
    publishedAt,
    mainImage,
    authorBio,
    body = [],
  } = post;
  return (
    <div className={stylesBlogArticle.article}>
      <img
        className={stylesBlogArticle.mainImg}
        src={urlFor(mainImage).url()}
        alt=""
      />
      <h1 className={stylesBlogArticle.articleTitle}>{title}</h1>
      <p className={stylesBlogArticle.authorName}>
        Escrito por {name} em{" "}
        {new Date(publishedAt).toLocaleDateString("pt-BR")}
      </p>
      <div className={stylesBlogArticle.articleBody}>
        <PortableText value={body} components={components} />
      </div>
      <div className={stylesBlogArticle.articleFooter}>
        <PortableText value={authorBio} />
        {authorImage && (
          <img
            src={urlFor(authorImage).url()}
            className={stylesBlogArticle.authorImg}
            alt={`${name}'s picture`}
          />
        )}
      </div>
    </div>
  );
};

export default BlogArticle;
