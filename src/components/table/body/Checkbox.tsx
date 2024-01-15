import React from "react";
import { CheckboxProps } from "./interface";

import { StyledCheckbox, StyledCheckboxCell } from "./BodyStyles";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...rest }, ref) => {
    const resolvedRef = ref;

    return (
      <StyledCheckboxCell>
        <StyledCheckbox type="checkbox" ref={resolvedRef} {...rest} />
      </StyledCheckboxCell>
    );
  }
);

export default Checkbox;
