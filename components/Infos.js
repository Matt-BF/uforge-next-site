import stylesInfos from "../styles/Infos.module.css";
import Card from "./Card";

const Infos = () => {
  return (
    <div className={`${stylesInfos.container}`}>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-center"
      >
        <h1 style={{ textAlign: "center", color: "#ffff" }}>
          <strong>Nosso propósito</strong>
        </h1>
        <h2
          style={{ textAlign: "center", marginBottom: "40px", color: "#ffff" }}
        >
          Tornar a ciência prazerosa para quem faz, encantadora para quem vive e
          biorreverente
        </h2>
      </div>
      <div className={`${stylesInfos.flex}`}>
        <div
          className={`${stylesInfos.flex}`}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <Card
            imgSrc={"scientist.jpg"}
            subtitle="Prazer em ser cientista"
            text="Viver na fronteira do conhecimento é ao mesmo
          tempo recompensante e desafiador.
          Tornamos os preparativos para sua experimentação simples
          pra você focar no que importa: a verdade."
          />
        </div>
        <div
          className={`${stylesInfos.flex}`}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <Card
            right="true"
            imgSrc={"community.jpg"}
            subtitle="A comunidade"
            text="Absolutamente tudo que facilita nossas vidas tem
          um pouquinho de ciência. Com cientistas mais felizes, a
          sociedade progride mais rapidamente e a vida fica mais simples
          e melhor de ser vivida."
          />
        </div>
        <div
          className={`${stylesInfos.flex}`}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <Card
            imgSrc={"biorreverent.jpg"}
            subtitle="Biorreverente"
            text="Temos como objetivo cuidar, zelar e respeitar tudo o que tem vida.
          Dessa maneira, mantemos o equilíbrio, a qualidade e a continuidade do que é nosso. 
          Simples assim."
          />
        </div>
      </div>
    </div>
  );
};

export default Infos;
