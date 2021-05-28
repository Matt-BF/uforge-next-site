import stylesDropdown from "../styles/Dropdown.module.css";
import Link from "next/link";
import Flux from "./FluxesList";

const Dropdown = ({ flux }) => {
  return (
    <div className={`${stylesDropdown.productContent} grid-2`}>
      <img className={stylesDropdown.image} src={product.img} alt="" />
      <p className={stylesDropdown.description}>{flux.description}</p>
    </div>
  );
};

export default Dropdown;
