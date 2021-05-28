import stylesDropdown from "../styles/Dropdown.module.css";
import Link from "next/link";

const Dropdown = ({ flux }) => {
  return (
    <div className={`${stylesDropdown.productContent} grid-2`}>
      <img className={stylesDropdown.image} src={flux.img} alt="" />
      <p className={stylesDropdown.description}>{flux.description}</p>
    </div>
  );
};

export default Dropdown;
