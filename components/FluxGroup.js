import Link from "next/link";
import Dropdown from "./Dropdown";
import ButtonDropdown from "./ButtonDropdown";

const FluxGroup = ({ fluxes }) => {
  return (
    <div>
      <div>
        {fluxes.map((flux, idx) => (
          <ButtonDropdown fluxTitle={flux.title}>
            <Dropdown flux={flux}></Dropdown>
          </ButtonDropdown>
        ))}
      </div>
    </div>
  );
};

export default FluxGroup;
