import React from "react";
import styled from "styled-components";
import { PaginationButtonProps } from "./interface";
import next from "../../../assets/svgs/next.svg";
import back from "../../../assets/svgs/back.svg";
import dropdownIcon from "../../../assets/svgs/dropdownIcon.svg";

export const PaginationContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  margin-top: -2px;
  border-radius: 0px 0px 10px 10px;
  border-top: solid 1px #deebf4;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

export const NextButton = styled.button`
  width: 32px;
  height: 38px;
  margin-right: 8px;
  border: solid 1px #d0d5dd;
  border-radius: 8px;
  background-color: #ffffff;
  background: url(${next}) no-repeat center center;
  cursor: pointer;

  &:hover {
    background-color: #d5eaf2;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
    z-index: 1;
  }
`;

export const PreviousButton = styled.button`
  width: 32px;
  height: 38px;
  margin-left: 8px;
  border: solid 1px #d0d5dd;
  border-radius: 8px;
  background-color: #ffffff;
  background: url(${back}) no-repeat center center;
  cursor: pointer;

  &:hover {
    background-color: #d5eaf2;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
    z-index: 1;
  }
`;

export const FirstPageButton = styled.button<PaginationButtonProps>`
  width: 40px;
  height: 38px;
  border: solid 1px #d0d5dd;
  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#A9C7DB" : "#ffffff")};

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#A9C7DB" : "#f9fafb")};
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
    z-index: 1;
  }
`;

export const PageButton = styled.button<PaginationButtonProps>`
  width: 40px;
  height: 38px;
  border: solid 1px #d0d5dd;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#A9C7DB" : "#ffffff")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#A9C7DB" : "#f9fafb")};
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
    z-index: 1;
  }
`;

export const LastPageButton = styled.button<PaginationButtonProps>`
  width: 40px;
  height: 38px;
  border: solid 1px #d0d5dd;
  border-radius: 0px 8px 8px 0px;
  background-color: #ffffff;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#A9C7DB" : "#ffffff")};

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#A9C7DB" : "#f9fafb")};
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
    z-index: 1;
  }
`;

export const PaginationSection = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: 16px;
`;

export const RowsPerPageSelect = styled.select`
  padding: 10px 10px 10px 16px;
  max-height: 38px;
  width: 60px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  margin-right: 24px;
  background: transparent;
  background-image: url(${dropdownIcon});
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
  }
`;
