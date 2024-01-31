import styled from "styled-components";
import tableCheckBoxBg from "../../../assets/svgs/tablecheckboxIcon.svg";
import dotsImage from "../../../assets/svgs/dots.svg";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 150px;
`;

export const StyledTableContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  overflow-x: auto;
`;

export const StyledTableBodyContainer = styled.tbody``;

//Table Element
export const StyledTable = styled.div`
  font-family: Poppins;
  border-collapse: separate;
  width: 100%;
`;

// Flex container for a table row
export const StyledTableRow = styled.tr`
  display: flex;
  background-color: #ffffff;
  &:nth-child(odd):not(:first-child) {
    background-color: #f3faff;
  }
`;

export const StyledCheckbox = styled.input`
  position: relative;
  appearance: none;
  background-color: #ffffff;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 7px;
  transition: background-image 0.2s;

  &:checked {
    background: url(${tableCheckBoxBg}) center/cover;
    color: #ffffff;
    text-align: center;
    line-height: 18px;
  }

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
  }
`;

// Checkbox cell with styling
export const StyledCheckboxCell = styled.td`
  position: sticky;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #deebf4;
  box-shadow: 3px 0 2px 0 rgba(0, 0, 0, 0.2);
  width: 25px;
  padding: 0 16px 0 16px;
  left: 0;
  z-index: 2;
`;

export const StyledDotsButton = styled.button`
  height: 100%;
  background-image: url(${dotsImage});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const StyledDotsButtonCell = styled.td`
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

  @media (max-width: 743px) {
    position: relative;
  }
`;

// Styled header cell for the table
export const StyledTableHeaderCell = styled.th`
  padding: 0 14px 0 14px;
  text-align: left;
  height: 32px;
  font-weight: 400;
  font-size: 12px;
  color: #4b535f;
  position: relative;

  &:not(:last-child) {
    border-right: solid #bac0c7 1px;
  }
  &:not(:first-child) {
    &:hover {
      background-color: #d5eaf2;
      cursor: pointer;
    }
  }
`;

// Wrapper for the header row with additional styling
export const StyledHeaderWrapper = styled.div`
  max-height: 48px;
  min-height: 32px;
  padding: 4px 0 8px 16px;
  background-color: #e6f0f4;
  min-width: 1120px;
  display: flex;
`;

// Text component with additional styling
export const StyledText = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

export const SortIcon = styled.img`
  margin-left: 4px;
  margin-top: 10px;
`;

export const HeaderCellContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: relative;
`;

// Styled regular cell for the table
export const StyledTableCell = styled.td`
  padding: 0 14px;
  text-align: left;
  height: auto; /* Change height to auto to allow content to determine height */
  font-weight: 400;
  font-size: 12px;
  color: #313131;
  gap: 8px;
  max-width: 150px;
  white-space: normal; /* Change white-space to normal to allow text wrapping */
  overflow: visible; /* Change overflow to visible to allow content to overflow */
  text-overflow: clip; /* Change text-overflow to clip to handle the overflow */
  max-height: 40px; /* Adjust max-height to control the maximum height of the cell */

  &:not(:last-child) {
    border-right: solid #bac0c7 1px;
  }
`;

// Wrapper for rows with additional styling
export const StyledRowWrapper = styled.div`
  /* max-height: 60px; */
  min-height: 40px;
  padding: 4px 0 8px 16px;
  min-width: 1120px;

  cursor: pointer;
  &:hover {
    background-color: #d5eaf2;
    cursor: pointer;
  }
`;

export const TableRowMoreActionsContainer = styled.div`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  position: absolute;
  right: 17%;
  /* top: 18%; */
  gap: 16px;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid #d0d5dd;
  background: #fff;
  height: 64px;
  max-height: 100%;
  width: 100%;
  max-width: 352px;
  z-index: 1000;
  transition-duration: 0.5ms;
`;

export const Resizer = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  right: -3px;
  height: 100%;
  width: 5px;
  background-color: #27bbff;
  cursor: col-resize;
  user-select: none;
  touch-action: none;
  border-radius: 6px;

  &:hover {
    opacity: 1;
  }
`;

export const ResizerIsResizing = styled(Resizer)`
  background-color: #2eff31;
  opacity: 1;
`;
