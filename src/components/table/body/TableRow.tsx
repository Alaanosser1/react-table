import Checkbox from "components/table/body/Checkbox";
import React from "react";
import DotsButton from "./DotsButton";
import { TableRowProps } from "./interface";
import {
  StyledTableCell,
  StyledTableRow,
  StyledRowWrapper,
  StyledText,
} from "./BodyStyles";

const TableRow: React.FC<TableRowProps> = ({ page, prepareRow, columns }) => {
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
              {row.cells.map((cell: any) => {
                const matchingColumn = columns.find(
                  (column: any) => column.Header === cell.column.Header
                );
                return (
                  <StyledTableCell
                    key={cell.column.id}
                    {...cell.getCellProps()}
                    style={{
                      ...(matchingColumn
                        ? {
                            minWidth: matchingColumn.minWidth,
                            maxWidth: matchingColumn.maxWidth,
                          }
                        : {}),
                    }}
                  >
                    <StyledText>{cell.render("Cell")}</StyledText>
                  </StyledTableCell>
                );
              })}
            </StyledRowWrapper>
            <DotsButton />
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default TableRow;
