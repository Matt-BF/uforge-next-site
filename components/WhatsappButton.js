import stylesWhatsappButton from "../styles/WhatsappButton.module.css";

const WhatsappButton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=+5519999453544">
      <i className={`${stylesWhatsappButton.whatsappBtn} fab fa-whatsapp`}></i>
    </a>
  );
};

export default WhatsappButton;
