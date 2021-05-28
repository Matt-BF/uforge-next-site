import FluxGroup from "./FluxGroup";
import Dropdown from "./Dropdown";
import stylesFluxList from "../styles/FluxList.module.css";

const FluxesList = ({ fluxes }) => {
  return (
    <div className={stylesFluxList.flex}>
      {fluxes.map((flux, idx) => {
        <FluxGroup key={idx} flux={flux} />;
      })}
    </div>
  );
};

export default FluxesList;
