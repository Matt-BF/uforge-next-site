import stylesStatements from "../styles/Statements.module.css";

const Statements = () => {
  return (
    <div>
      <h1 className={stylesStatements.statementTitle}>Conquistas</h1>
      <div className={`${stylesStatements.container} ${stylesStatements.grid}`}>
        <div className={stylesStatements.wrapperDiv}>
          <img
            className={stylesStatements.statementFoxes}
            src="logo_foxes_peq.png"
            alt="FoxES"
          />
        </div>
        <div className={stylesStatements.wrapperDiv}>
          <p className={stylesStatements.statementParagraph}>
            "Um produto nacional? Para testar no meio de uma pandemia?
            Justamente para detectar o coronavírus? Nunca estive tão feliz de
            ter aceito uma amostra grátis. 100 mil exames depois, ainda usando
            seu kit de extração, só podemos agradecer à Micro-Forge pela
            incrível parceria! Muito sucesso!"
          </p>
          <p className={stylesStatements.statementParagraph}>
            - Roni Moreira, Diretor Comercial da FoxES
          </p>
        </div>
        <div className={stylesStatements.wrapperDiv}>
          <img
            className={stylesStatements.statementBeads}
            src="beads_promega_rack.png"
            alt="beads"
          />
        </div>
      </div>
    </div>
  );
};

export default Statements;
