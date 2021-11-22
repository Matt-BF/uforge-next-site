import stylesInfos from "../styles/Infos.module.css";
import Card from "./Card";

const Infos = ({ isHandheld }) => {
  return (
    <div
      data-aos={!isHandheld ? "fade-down" : "fade"}
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
      className={`${stylesInfos.container} ${stylesInfos.flex}`}
    >
      <h1 style={{ textAlign: "center", color: "#ffff" }}>
        <strong>Nosso propósito</strong>
      </h1>
      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#ffff" }}>
        Tornar a ciência prazerosa para quem faz, encantadora para quem vive e
        biorreverente
      </h2>
      <div className={`${stylesInfos.flexGrid}`}>
        <Card
          title={<i className="fas fa-flask icon"></i>}
          subtitle="Prazer em ser cientista"
          text="Viver na fronteira do conhecimento é ao mesmo
          tempo recompensante e desafiador.
          Tornamos os preparativos para sua experimentação simples
          pra você focar no que importa: a verdade"
        />
        <Card
          title={<i className="fas fa-users icon"></i>}
          subtitle="A comunidade"
          text="Absolutamente tudo que facilita nossas vidas tem
          um pouquinho de ciência. Com cientistas mais felizes, a
          sociedade progride mais rapidamente e a vida fica mais simples
          e melhor de ser vivida."
        />
        <Card
          title={<i className="fas fa-seedling icon"></i>}
          subtitle="Biorreverente"
          text="Temos como objetivo cuidar, zelar e respeitar tudo o que tem vida.
          Dessa maneira, mantemos o equilíbrio, a qualidade e a continuidade do que é nosso. 
          Simples assim."
        />
      </div>
    </div>
  );
};

export default Infos;
