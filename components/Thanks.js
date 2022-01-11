import stylesThanks from "../styles/Thanks.module.css";

const Thanks = () => {
  return (
    <div className={stylesThanks.thanks}>
      <img className={stylesThanks.thanksImg} src="uforge_icon.png" alt="" />
      <p style={{ textAlign: "center" }}>
        Obrigado pelo seu contato! Iremos ler com carinho e responder em no
        máximo 24 horas
      </p>
    </div>
  );
};

export default Thanks;
