import React, { HTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";
import checkBoxBg from "../../../assets/svgs/checkboxIcon.svg";
import { CheckboxProps } from "./interface";

const StyledCheckbox = styled.input`
  position: relative;
  appearance: none;
  background-color: #ffffff;
  min-width: 20px;
  min-height: 20px;
  margin-right: 8px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #d0d5dd;
    border-radius: 7px;
  }

  &:checked:before {
    background-image: url(${checkBoxBg});
    background-size: cover;
    content: "";
    color: #ffffff;
    text-align: center;
    line-height: 18px;
  }
`;

// Checkbox cell with styling
const StyledCheckboxCell = styled.td`
  position: sticky;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #deebf4;
  box-shadow: 3px 0 2px 0 rgba(0, 0, 0, 0.2);
  width: 25px;
  padding: 0 16px 0 16px;
  left: 0;
`;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef<HTMLInputElement>(null);

    const resolvedRef = (ref ||
      defaultRef) as React.MutableRefObject<HTMLInputElement>;

    React.useEffect(() => {
      if (resolvedRef && resolvedRef.current) {
        resolvedRef.current.indeterminate = !!indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <StyledCheckboxCell>
        <StyledCheckbox type="checkbox" ref={resolvedRef} {...rest} />
      </StyledCheckboxCell>
    );
  }
);

export default Checkbox;
