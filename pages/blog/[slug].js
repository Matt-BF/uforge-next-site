import Head from "next/head";
import groq from "groq";
import client from "../../client";
import BlogArticle from "../../components/BlogArticle";

const blog = ({ post }) => {
  return (
    <>
      <Head>
        <title>MicroForge - Blog {post?.title}</title>
      </Head>
      {post && <BlogArticle post={post} />}
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "authorBio": author->bio,
  mainImage,
  publishedAt,
  body,
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default blog;
