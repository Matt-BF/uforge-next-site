import Head from "next/head";
import Hero from "../components/Hero";
import Sabia from "../components/Sabia";
import Infos from "../components/Infos";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const index = () => {
  const [isHandheld, setisHandheld] = useState(null);
  useEffect(() => {
    setisHandheld(window.matchMedia("(max-width:1200px)").matches);
  }, []);
  console.log(isHandheld);
  return (
    <div>
      <Head>
        <title>MicroForge - indústria e biotecnologia brasileira</title>
      </Head>
      <Hero isHandheld={isHandheld} />
      <Infos isHandheld={isHandheld} />
      <Sabia isHandheld={isHandheld} />
    </div>
  );
};

export default index;
