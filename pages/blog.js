import stylesBlogPage from "../styles/BlogPage.module.css";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import BlogCard from "../components/BlogCard";

const blog = ({ posts }) => {
  return (
    <div className={stylesBlogPage.container}>
      <h1>Confira nossos posts!</h1>
      <div className={stylesBlogPage.cardGroup}>
        {posts.length > 0 &&
          posts.map(
            (post) =>
              post.slug && (
                <Link
                  key={post._id}
                  href="/blog/[slug]"
                  as={`/blog/${post.slug.current}`}
                >
                  <a>
                    <BlogCard key={post._id} post={post} />
                  </a>
                </Link>
              )
          )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default blog;
