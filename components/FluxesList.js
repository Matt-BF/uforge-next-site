import FluxGroup from "./FluxGroup";
import Dropdown from "./Dropdown";

const FluxesList = ({ fluxes }) => {
  return (
    <div className="flex">
      {fluxes.map((flux, idx) => {
        <FluxGroup key={idx} flux={flux}></FluxGroup>;
      })}
    </div>
  );
};

export default FluxesList;
