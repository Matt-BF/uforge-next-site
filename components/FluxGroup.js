import Dropdown from "./Dropdown";
import ButtonDropdown from "./ButtonDropdown";
import { useState } from "react";

const FluxGroup = ({ flux }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "30px" }}>
      <ButtonDropdown
        onClick={() => setOpen((open) => !open)}
        fluxTitle={flux.fluxTitle}
      />
      {open && <Dropdown flux={flux} />}
    </div>
  );
};

export default FluxGroup;
