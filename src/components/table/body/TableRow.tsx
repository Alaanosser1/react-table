import Checkbox from "components/table/body/Checkbox";
import React, { ReactNode } from "react";
import styled from "styled-components";
import DotsButton from "./DotsButton";
import { TableRowProps } from "./interface";
import {
  StyledTableCell,
  StyledTableRow,
  StyledRowWrapper,
  StyledText,
} from "./BodyStyles";

// // Styled regular cell for the table
// const StyledTableCell = styled.td`
//   padding: 0 14px 0 14px;
//   text-align: left;
//   min-width: 150px;
//   height: 44px;
//   font-weight: 400;
//   font-size: 12px;
//   color: #313131;
//   gap: 8px;
//   max-width: 150px;
//
//   &:not(:last-child) {
//     border-right: solid #bac0c7 1px;
//   }
// `;
//
// // Flex container for a table row
// const StyledTableRow = styled.tr`
//   display: flex;
//
//   &:nth-child(odd):not(:first-child) {
//     background-color: #f3faff;
//   }
//   &:nth-child(even):not(:first-child) {
//     background-color: #ffffff;
//   }
// `;
//
// // Wrapper for rows with additional styling
// const StyledRowWrapper = styled.div`
//   max-height: 60px;
//   min-height: 40px;
//   padding: 4px 0 8px 16px;
// `;
//
// // Text component with additional styling
// const StyledText = styled.div`
//   margin-top: 10px;
// `;

const TableRow: React.FC<TableRowProps> = ({ page, prepareRow }) => {
  return (
    <>
      {page.map((row: any) => {
        prepareRow(row);
        return (
          <StyledTableRow {...row.getRowProps()}>
            <Checkbox
              {...row.getToggleRowSelectedProps()}
              checked={row.isSelected}
            />
            <StyledRowWrapper>
              {row.cells.map((cell: any) => (
                <StyledTableCell {...cell.getCellProps()}>
                  <StyledText>{cell.render("Cell")}</StyledText>
                </StyledTableCell>
              ))}
            </StyledRowWrapper>
            <DotsButton />
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default TableRow;
