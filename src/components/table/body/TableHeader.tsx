// Import necessary libraries and components
import React from "react";
import { useTable, useResizeColumns } from "react-table";
import Checkbox from "components/table/body/Checkbox";
import sort from "../../../assets/svgs/sort.svg";
import {
  StyledTableHeaderCell,
  StyledHeaderWrapper,
  StyledDotsButtonCell,
  StyledText,
  SortIcon,
  HeaderCellContainer,
  Resizer,
} from "./BodyStyles";
import { TableHeaderProps } from "./interface";

// Define the TableHeader component
const TableHeader: React.FC<TableHeaderProps> = ({
  headerGroups,
  getToggleAllRowsSelectedProps,
  useResizeColumns,
}) => {
  return (
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
                  style={{
                    // minWidth: column.minWidth,
                    // maxWidth: column.maxWidth,
                    width: column.width,
                  }}
                >
                  {/* {console.log(column.width, "WIDTH")} */}
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

                  <Resizer
                    onMouseDown={(e) => column.getResizerProps().onMouseDown(e)}
                    onTouchStart={(e) =>
                      column.getResizerProps().onTouchStart(e)
                    }
                    {...column.getResizerProps()}
                  />
                </StyledTableHeaderCell>
              ))}
            </StyledHeaderWrapper>
          </>
        ))}
      <StyledDotsButtonCell />
    </>
  );
};

export default TableHeader;
