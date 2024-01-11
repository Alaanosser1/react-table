import React from "react";
import styled from "styled-components";
import dotsImage from "../../../assets/svgs/dots.svg";

const StyledDotsButton = styled.img``;

// Dots button cell with styling
const StyledDotsButtonCell = styled.td`
  position: relative;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #deebf4;
  box-shadow: -3px 0 2px 0 rgba(0, 0, 0, 0.2);

  width: 25px;
  /* height: 56px; */
  padding: 0 16px 0 16px;
  position: sticky;
  right: 0;
`;

const DotsButton: React.FC = () => {
  return (
    <StyledDotsButtonCell>
      <StyledDotsButton src={dotsImage} alt="Dots" />
    </StyledDotsButtonCell>
  );
};

export default DotsButton;
