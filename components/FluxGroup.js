import Link from "next/link";
import Dropdown from "./Dropdown";
import ButtonDropdown from "./ButtonDropdown";
import { useState } from "react";

const FluxGroup = ({ flux }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ButtonDropdown
        onClick={() => setOpen((open) => !open)}
        fluxTitle={flux.title}
      />
      {open && <Dropdown flux={flux} />}
    </div>
  );
};

export default FluxGroup;
