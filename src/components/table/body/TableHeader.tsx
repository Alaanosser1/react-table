// TableHeader.tsx
import Checkbox from "components/table/body/Checkbox";
import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./interface";
import sort from "../../../assets/svgs/sort.svg";
import {
  StyledTableHeaderCell,
  StyledHeaderWrapper,
  StyledDotsButtonCell,
  StyledText,
  SortIcon,
  CellContainer,
} from "./BodyStyles";

const TableHeader: React.FC<TableHeaderProps> = ({
  headerGroups,
  getToggleAllRowsSelectedProps,
}) => (
  <>
    <Checkbox {...getToggleAllRowsSelectedProps()} />
    {Array.isArray(headerGroups) &&
      headerGroups.map((headerGroup: any) => (
        <StyledHeaderWrapper {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <StyledTableHeaderCell
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              <CellContainer>
                <SortIcon src={sort} />
                <StyledText>{column.render("Header")}</StyledText>
              </CellContainer>
            </StyledTableHeaderCell>
          ))}
        </StyledHeaderWrapper>
      ))}
    <StyledDotsButtonCell />
  </>
);

export default TableHeader;
