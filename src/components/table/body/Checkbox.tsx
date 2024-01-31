import React from "react";
import { CheckboxProps } from "./interface";
import { StyledCheckboxCell } from "./BodyStyles";
import tableCheckBoxBg from "../../../assets/svgs/tablecheckboxIcon.svg";
import styled from "styled-components";

export const StyledCheckbox = styled.input`
  position: relative;
  appearance: none;
  background-color: #ffffff;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 7px;
  transition: background-image 0.2s;

  &:checked {
    background: url(${tableCheckBoxBg}) center/cover;
    color: #ffffff;
    text-align: center;
    line-height: 18px;
  }

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
  }
`;
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
