// TableHeader.tsx
import Checkbox from "components/table/body/Checkbox";
import React from "react";
import { TableHeaderProps } from "./interface";
import sort from "../../../assets/svgs/sort.svg";
import {
  StyledTableHeaderCell,
  StyledHeaderWrapper,
  StyledDotsButtonCell,
  StyledText,
  SortIcon,
  HeaderCellContainer,
} from "./BodyStyles";

const TableHeader: React.FC<TableHeaderProps> = ({
  headerGroups,
  getToggleAllRowsSelectedProps,
}) => (
  <>
    {Array.isArray(headerGroups) &&
      headerGroups.map((headerGroup: any, groupIndex: number) => (
        <>
          <Checkbox {...getToggleAllRowsSelectedProps()} />
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
                <HeaderCellContainer>
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
                </HeaderCellContainer>
              </StyledTableHeaderCell>
            ))}
          </StyledHeaderWrapper>
        </>
      ))}
    <StyledDotsButtonCell />
  </>
);

export default TableHeader;
