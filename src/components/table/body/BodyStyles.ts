import styled from "styled-components";
import checkBoxBg from "../../../assets/svgs/checkboxIcon.svg";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 150px;
`;

export const StyledTableContainer = styled.div`
  max-width: 1120px; /* or any fixed width you prefer */
  margin: 0 auto;
  margin-top: 150px;
  overflow-x: auto; /* use 'auto' instead of 'scroll' */
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
  /* margin-right: 8px; */
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 7px;
  transition: background-image 0.2s;

  &:checked {
    background: url(${checkBoxBg}) center/cover;
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
`;

export const StyledDotsButton = styled.img``;

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

export const CellContainer = styled.div`
  display: flex;
`;

// Styled regular cell for the table
export const StyledTableCell = styled.td`
  padding: 0 14px 0 14px;
  text-align: left;
  height: 44px;
  font-weight: 400;
  font-size: 12px;
  color: #313131;
  gap: 8px;
  max-width: 150px;

  &:not(:last-child) {
    border-right: solid #bac0c7 1px;
  }
`;

// Wrapper for rows with additional styling
export const StyledRowWrapper = styled.div`
  max-height: 60px;
  min-height: 40px;
  padding: 4px 0 8px 16px;
`;
