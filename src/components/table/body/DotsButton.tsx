import React from "react";
import dotsImage from "../../../assets/svgs/dots.svg";
import { StyledDotsButton, StyledDotsButtonCell } from "./BodyStyles";

const DotsButton: React.FC = () => {
  return (
    <StyledDotsButtonCell>
      <StyledDotsButton src={dotsImage} alt="Dots" />
    </StyledDotsButtonCell>
  );
};

export default DotsButton;
