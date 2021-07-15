import Head from "next/head";
import FluxGroup from "../components/FluxGroup";
import { fluxes } from "../data";
import stylesProduct from "../styles/Product.module.css";

const products = ({}) => {
  return (
    <div>
      <Head>
        <title>MicroForge - Produtos</title>
        <meta description="Confira nossos fluxos de biologia molecular e os produtos oferecidos para cada etapa do seu projeto!" />
      </Head>
      <div className={stylesProduct.container}>
        <h2 style={{ marginBottom: "50px" }}>
          Escolha um fluxo para ver nossos produtos disponíveis
        </h2>

        {fluxes.map((flux) => (
          <FluxGroup key={flux.id} flux={flux} />
        ))}
      </div>
    </div>
  );
};
export default products;
