import stylesSabia from "../styles/Sabia.module.css";
import Link from "next/link";

const Sabia = ({ isHandheld }) => {
  return (
    <div>
      <div className={`${stylesSabia.grid}`}>
        <div
          className={stylesSabia.textGrid}
          data-aos={!isHandheld ? "fade-down-right" : "fade"}
          data-aos-duration="1000"
          data-aos-anchor-placement={!isHandheld && "top-center"}
        >
          <p className={stylesSabia.statementParagraph}>
            "Um produto nacional? Para testar no meio de uma pandemia?
            Justamente para detectar o coronavírus? Nunca estive tão feliz de
            ter aceito uma amostra grátis. 160 mil exames depois, ainda usando
            seu kit de extração, só podemos agradecer à Micro-Forge pela
            incrível parceria! Muito sucesso!"
          </p>
          <Link
            href={{
              pathname: "/products/Linha Sabiá",
            }}
          >
            <a className={stylesSabia.linkButton}>Confira a Linha Sabiá!</a>
          </Link>
        </div>
        <img
          data-aos={!isHandheld ? "fade-down-left" : "fade"}
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
          className={stylesSabia.sabia}
          src="/logo_sabia.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sabia;
