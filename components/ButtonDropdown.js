import stylesButtonDropdown from "../styles/ButtonDropdown.module.css";

const ButtonDropdown = ({ onClick, fluxTitle }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={stylesButtonDropdown.collapsible}
    >
      <h2>{fluxTitle}</h2>
    </button>
  );
};

export default ButtonDropdown;
