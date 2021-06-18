import stylesDropdown from "../styles/Dropdown.module.css";
import FluxComponent from "./FluxComponent";
import Link from "next/link";

const Dropdown = ({ flux }) => {
  return (
    <div className={stylesDropdown.dropdown}>
      {flux.fluxComponents.map((component, idx) => (
        <FluxComponent key={idx} component={component} />
      ))}
    </div>
  );
};

export default Dropdown;
