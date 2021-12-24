import stylesSabia from "../styles/Sabia.module.css";
import Link from "next/link";

const Sabia = () => {
  return (
    <div>
      <div className={`${stylesSabia.grid}`}>
        <div
          className={stylesSabia.textGrid}
          data-aos="fade-down-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <p className={stylesSabia.statementParagraph}>
            Conheça a linha de extração por beads magnéticas idealizada por
            nossos cientistas num momento de pandemia, e que foi responsável
            pela realização de mais de 180 mil exames de Covid-19! Hoje a Linha
            Sabiá conta com extrações para as mais diversas amostras e na
            conformação de maior facilidade para o pesquisador, seja uma
            extração manual, automatizada, de 10, 100, 1000 ou 10.000 amostras"
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
          data-aos="fade-down-left"
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
