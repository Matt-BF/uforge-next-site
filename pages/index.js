import Head from "next/head";
import Hero from "../components/Hero";
import Sabia from "../components/Sabia";
import Infos from "../components/Infos";

const index = () => {
  return (
    <div>
      <Head>
        <title>MicroForge - indústria e biotecnologia brasileira</title>
      </Head>
      <Hero />
      <Infos />
      <Sabia />
    </div>
  );
};

export default index;
