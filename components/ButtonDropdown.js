import stylesButtonDropdown from "../styles/ButtonDropdown.module.css";

const ButtonDropdown = ({ onClick, fluxTitle }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={stylesButtonDropdown.collapsible}
    >
      <p>{fluxTitle}</p>
    </button>
  );
};

export default ButtonDropdown;
