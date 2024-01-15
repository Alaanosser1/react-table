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
      headerGroups.map((headerGroup: any, groupIndex: number) => (
        <StyledHeaderWrapper
          {...headerGroup.getHeaderGroupProps()}
          key={groupIndex}
        >
          {headerGroup.headers.map((column: any, columnIndex: number) => (
            <StyledTableHeaderCell
              {...(columnIndex === 0
                ? {}
                : column.getHeaderProps(column.getSortByToggleProps()))}
              key={columnIndex}
              style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
            >
              <CellContainer>
                {columnIndex === 0 ? (
                  <>
                    <SortIcon />
                    <StyledText>{column.render("Header")}</StyledText>
                  </>
                ) : (
                  <>
                    <SortIcon src={sort} />
                    <StyledText>{column.render("Header")}</StyledText>
                  </>
                )}
              </CellContainer>
            </StyledTableHeaderCell>
          ))}
        </StyledHeaderWrapper>
      ))}
    <StyledDotsButtonCell />
  </>
);

export default TableHeader;
