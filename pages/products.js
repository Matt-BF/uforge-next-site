import Head from "next/head";
import FluxGroup from "../components/FluxGroup";
import { fluxes } from "../data";
import stylesProduct from "../styles/Product.module.css";

const products = ({}) => {
  return (
    <div>
      <Head>
        <title>μForge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_microForge.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
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
