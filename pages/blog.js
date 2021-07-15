import Head from "next/head";
import BlogCard from "../components/BlogCard";

const blog = ({ mediumPosts }) => {
  return (
    <div>
      <Head>
        <title>MicroForge: Notícias e Blog</title>
        <meta description="Fique de olho em nossas atualizações e posts!" />
      </Head>
      <div style={{ margin: "50px" }}>
        <h2>Confira nossos posts no Medium!</h2>

        {mediumPosts.items.map((post, idx) => (
          <BlogCard
            key={idx}
            link={post.guid}
            title={post.title}
            date={post.pubDate.split(" ")[0]}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@microforge"
  );
  const mediumPosts = await res.json();
  return {
    props: {
      mediumPosts,
    },
  };
};

export default blog;
