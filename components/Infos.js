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
          subtitle="Prazerosa para quem faz"
          text="Como doutorandos e ex-alunos da UNICAMP, sabemos em primeira
          mão as dificuldades dos nossos cientistas com produtos que não atendem
          as demandas ou as expectativas"
        />
        <Card
          title={<i className="fas fa-users icon"></i>}
          subtitle="Encantadora para quem vive"
          text=""
        />
        <Card
          title={<i className="fas fa-seedling icon"></i>}
          subtitle="Biorreverente"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt porro illum, asperiores omnis, molestiae tempora mollitia eaque labore laudantium sit quae error corporis. Eveniet culpa eos porro tenetur natus."
        />
      </div>
    </div>
  );
};

export default Infos;
