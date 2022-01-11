import stylesContactForm from "../styles/ContactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <form
        className={stylesContactForm.ContactForm}
        name="contact"
        method="POST"
        data-netlify="true"
        action="contact/?success=true"
      >
        <h2>Dúvidas, sugestões ou interesse?</h2>{" "}
        <h3>
          Entre em contato conosco pelo formulário abaixo, ou por alguma de
          nossas redes sociais
        </h3>
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ textAlign: "center" }}>
          <label htmlFor="yourname">Seu nome</label> <br />
          <input
            className={stylesContactForm.formInput}
            type="text"
            name="name"
            id="yourname"
            required
          />
        </p>
        <p style={{ textAlign: "center" }}>
          <label htmlFor="youremail">Seu Email</label> <br />
          <input
            className={stylesContactForm.formInput}
            type="email"
            name="email"
            id="youremail"
            required
          />
        </p>
        <p style={{ textAlign: "center" }}>
          <label htmlFor="yourmessage">Sua Mensagem</label> <br />
          <textarea
            className={stylesContactForm.textArea}
            name="message"
            id="yourmessage"
          ></textarea>
        </p>
        <p>
          <button className={stylesContactForm.formButton} type="submit">
            Enviar
          </button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
