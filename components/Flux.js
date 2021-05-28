import ButtonDropdown from "./ButtonDropdown";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Flux = ({ flux }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ButtonDropdown
        productTitle={flux.title}
        onClick={() => setOpen((open) => !open)}
      />
      {open && <Dropdown flux={flux} />}
    </div>
  );
};

export default Flux;
