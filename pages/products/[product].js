import stylesProductPage from "../../styles/ProductPage.module.css";
import { products } from "../../data";
import Head from "next/head";
import SubproductCard from "../../components/SubproductCard";

const product = ({ product }) => {
  return (
    <div>
      <Head>
        <title>Produto-{product.productName}</title>
      </Head>
      <div className={stylesProductPage.container}>
        <h2 className={stylesProductPage.title}>{product.productName}</h2>
        <p className={stylesProductPage.productDescription}>
          {product.productDescription}
        </p>

        <img
          className={stylesProductPage.productImg}
          src={product.productImg}
          alt=""
        />
      </div>
      <div className={stylesProductPage.subproductsContainer}>
        <h1 style={{ color: "#fff" }}>Confira!</h1>
        <div className={stylesProductPage.subproducts}>
          {product.productSubproducts.map((subproduct) => (
            <SubproductCard
              key={subproduct.id}
              subproduct={subproduct}
            ></SubproductCard>
          ))}
        </div>
        <div className={stylesProductPage.container}>
          <p>
            Todos nossos produtos são personalizáveis em todos os aspectos para
            seu melhor conforto e usabilidade
          </p>
          <p>
            Solicite por
            <a
              className={stylesProductPage.link}
              href="mailto:comercial@micro-forge.com"
            >
              {" "}
              Email{" "}
            </a>
            ou
            <span>
              <a
                className={stylesProductPage.link}
                href="https://api.whatsapp.com/send?phone=+5519999453544"
              >
                {" "}
                Whatsapp
              </a>
            </span>
            !
          </p>
        </div>
      </div>
    </div>
  );
};

export default product;

export async function getStaticProps(context) {
  const product = products.filter(
    (product) => product.productName === context.params.product
  )[0];
  return {
    props: { product }, // will be passed to the page component as props
  };
}

export const getStaticPaths = () => {
  const productNames = products.map((product) => product.productName);

  const paths = productNames.map((productName) => ({
    params: { product: productName.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
