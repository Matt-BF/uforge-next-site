import Head from "next/head";
import Slider from "../components/Slider";
import Infos from "../components/Infos";
import Statements from "../components/Statements";

const index = ({}) => {
  const allNews = [
    {
      id: "1",
      title: "Estamos na Liga Brasileira de Bioinformática!",
      excerpt: "Confira nosso post de apresentação",
      text: " ",
      link: "https://www.instagram.com/p/CP69pGipI8w/?utm_source=ig_web_copy_link",
    },

    {
      id: "1",
      title:
        "Nossa seção de produtos vai ser diferente de tudo o que você já viu",
      excerpt: "Visite a aba de produtos a partir de 20/06",
      text: " ",
      link: "/products",
    },
  ];
  return (
    <div>
      <Head>
        <title>MicroForge, indústria e biotecnologia brasileira</title>
      </Head>
      <Slider allNews={allNews} />
      <Infos />
      <Statements />
    </div>
  );
};

export default index;
