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
      {console.log(page)}
      {page.map((row: any) => {
        prepareRow(row);
        return (
          <StyledTableRow {...row.getRowProps()}>
            <Checkbox
              {...row.getToggleRowSelectedProps()}
              checked={row.isSelected}
            />
            <StyledRowWrapper>
              {row.cells.map((cell: any, index: number) => (
                <StyledTableCell
                  {...cell.getCellProps()}
                  style={{ minWidth: columns[index].minWidth }}
                >
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
