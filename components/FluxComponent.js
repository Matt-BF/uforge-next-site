import stylesFluxComponent from "../styles/FluxComponent.module.css";
import { useState } from "react";
import products from "../pages/products";
import Link from "next/link";

const FluxComponent = ({ component }) => {
  const [open, setOpen] = useState(false);

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
  return (
    <div
      className={stylesFluxComponent.componentGroup}
      onClick={() => setOpen((open) => !open)}
    >
      {component.componentProducts.length == 0 ? (
        <>
          <h2>{component.componentName} (Em breve)</h2>
          <img
            className={stylesFluxComponent.componentImgOpaque}
            src={component.componentImg}
          ></img>
        </>
      ) : (
        <>
          <h2>{component.componentName}</h2>
          <img
            className={stylesFluxComponent.componentImg}
            src={component.componentImg}
          ></img>
        </>
      )}

      {open && (
        <div>
          {component.componentProducts.map((componentProduct) => (
            <Link href={`/products/${componentProduct}`}>
              <a>{componentProduct}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FluxComponent;
