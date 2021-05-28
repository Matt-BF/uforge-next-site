import stylesInfos from "../styles/Infos.module.css";
import Card from "./Card";

const Infos = () => {
  return (
    <div
      className={`${stylesInfos.container} ${stylesInfos.flex} bg-secondary`}
    >
      <h1 style={{ textAlign: "center" }}>
        <strong>Nosso propósito</strong>
      </h1>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
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
          text="Podemos viver muito bem por pouco tempo fazendo o básico.
          Ou podemos fazer muito bem o que precisa ser feito para viver
          muito bem por muito tempo. Simples assim."
        />
      </div>
    </div>
  );
};

export default Infos;
