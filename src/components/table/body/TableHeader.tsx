// TableHeader.tsx
import Checkbox from "components/table/body/Checkbox";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./interface";

// Styled header cell for the table
const StyledTableHeaderCell = styled.th`
  padding: 0 14px 0 14px;
  text-align: left;
  min-width: 150px;
  height: 32px;
  font-weight: 400;
  font-size: 12px;
  color: #4b535f;

  &:not(:last-child) {
    border-right: solid #bac0c7 1px;
  }
`;

// Wrapper for the header row with additional styling
const StyledHeaderWrapper = styled.div`
  max-height: 48px;
  min-height: 32px;
  padding: 4px 0 8px 16px;
  background-color: #e6f0f4;
`;

// Checkbox cell with styling
const StyledCheckboxCell = styled.td`
  position: sticky;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #deebf4;
  /* box-shadow: 3px 0 5px -3px rgba(0, 0, 0, 0.5); */
  box-shadow: 3px 0 2px 0 rgba(0, 0, 0, 0.2);
  width: 25px;
  padding: 0 16px 0 16px;
  position: sticky;
  left: 0;
`;

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
  padding: 0 16px 0 16px;
  position: sticky;
  right: 0;
`;

// Text component with additional styling
const StyledText = styled.div`
  margin-top: 10px;
`;

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
            <StyledTableHeaderCell {...column.getHeaderProps()}>
              <StyledText>{column.render("Header")}</StyledText>
            </StyledTableHeaderCell>
          ))}
        </StyledHeaderWrapper>
      ))}
    <StyledDotsButtonCell />
  </>
);

export default TableHeader;
