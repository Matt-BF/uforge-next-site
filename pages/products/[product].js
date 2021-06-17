const product = ({ product }) => {
  return <div>{product[0].productName}</div>;
};

export default product;

export async function getServerSideProps(context) {
  const products = [
    {
      id: "1",
      productName: "Linha Sabiá",
      productSubproducts: [
        {
          id: "1",
          subproductName: "Kit Amostras Limpas",
          subproductPrice: "R$2500",
        },
        {
          id: "2",
          subproductName: "Kit Levedura",
          subproductPrice: "R$2800",
        },
      ],
    },
  ];
  const product = products.filter(
    (product) => product.productName == context.query.product
  );
  return {
    props: { product }, // will be passed to the page component as props
  };
}
