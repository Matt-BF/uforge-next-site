import ContactForm from "../components/ContactForm";
import stylesContactForm from "../styles/Contact.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Thanks from "../components/Thanks";

const contact = () => {
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  return (
    <div className={stylesContactForm.container}>
      {formVisible ? <ContactForm /> : <Thanks />}
    </div>
  );
};

export default contact;
