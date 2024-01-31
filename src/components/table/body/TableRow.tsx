import Checkbox from "components/table/body/Checkbox";
import React from "react";
import DotsButton from "./DotsButton";
import { TableRowProps } from "./interface";
import {
  StyledTableCell,
  StyledTableRow,
  StyledRowWrapper,
  StyledText,
  TableRowMoreActionsContainer,
  StyledDotsButton,
  StyledDotsButtonCell,
} from "./BodyStyles";
import { useState } from "react";
const TableRow: React.FC<TableRowProps> = ({
  page,
  prepareRow,
  headerGroups,
  useResizeColumns,
}) => {
  // console.log(headerGroups[0].headers, "HEADERGROUPS");
  const [isRowActionsActive, setIsRowActionsActive] = useState(false);

  return (
    <>
      {page.map((row: any) => {
        prepareRow(row);

        return (
          <StyledTableRow {...row.getRowProps()} key={row.id}>
            <Checkbox
              {...row.getToggleRowSelectedProps()}
              checked={row.isSelected}
            />
            <StyledRowWrapper>
              {row.cells.map((cell: any, index: number) => {
                const matchingColumn = headerGroups[0].headers[index];

                return (
                  <StyledTableCell
                    key={cell.column.id}
                    {...cell.getCellProps()}
                    style={{
                      minWidth: matchingColumn.width,
                    }}
                  >
                    <StyledText>{cell.render("Cell")}</StyledText>
                  </StyledTableCell>
                );
              })}
            </StyledRowWrapper>
            <StyledDotsButtonCell>
              <StyledDotsButton onClick={() => setIsRowActionsActive(true)} />
            </StyledDotsButtonCell>
          </StyledTableRow>
        );
      })}
    </>
  );
};

export default TableRow;
