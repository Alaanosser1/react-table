import styled from "styled-components";
import untoggledVisibilityCheckbox from "../../../assets/svgs/toggledVisibilityCheckbox.svg";
import toggledVisibilityCheckbox from "../../../assets/svgs/untoggledVisibilityCheckbox.svg";
import columns from "../../../assets/svgs/columns.svg";

export const ActionsContainer = styled.div`
  display: flex;
  padding: 24px 16px;
  justify-content: space-between;
  gap: 18px;
  align-self: stretch;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid var(--background, #deebf4);
  background: var(--White, #fff);
  max-width: 1088px;
  margin: 0 auto;
  overflow-x: auto;
  @media (max-width: 744px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ColumnVisibilityButton = styled.button`
  display: table-cell;
  width: 122.927px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Gray-300, #d0d5dd);
  background: var(--Base-White, #fff);
  color: var(--Blue, #015c9a);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  text-transform: capitalize;
  text-align: right;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  position: relative; /* Added for positioning the icon */

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    box-shadow: 0px 0px 0px 4px #f2f4f7;
  }

  &::before {
    content: url(${columns});
    width: 16px;
    height: 16px;
    margin-right: 8px;
    position: absolute;
    left: 16px;
    bottom: 14px;
  }

  @media (max-width: 744px) {
    visibility: hidden;
  }
`;

export const ColumnVisibilityContainer = styled.div`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  position: absolute;
  right: 17%;
  top: 18%;
  gap: 16px;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid #d0d5dd;
  background: #fff;
  max-width: 238px;
  width: 100%;
  max-height: 100%;
  z-index: 1000;
  transition-duration: 0.5ms;

  /* @media (max-width: 744px) {
    max-width: 100%;
    height: 100vh;
    right: 0;
    top: 0;
    padding-top: 30%;
    overflow-y: hidden;
  } */
`;

export const ColumnVisibilityCheckbox = styled.input`
  position: relative;
  appearance: none;
  background-color: #ffffff;
  background: url(${untoggledVisibilityCheckbox}) center/cover;
  width: 36px;
  height: 20px;
  max-width: 36px;
  max-height: 20px;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  transition: background-image 0.4s;
  margin-right: 10px;
  margin-top: -1px;

  &:checked {
    background: url(${toggledVisibilityCheckbox}) center/cover;
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

export const ColumnVisibilityItemContainer = styled.div`
  display: flex;
  /* @media (max-width: 744px) {
    overflow-y: hidden;
    margin-left: 8%;
  } */
`;

export const ColumnVisibilityItemLabel = styled.label`
  color: var(--Text-placeholder, #848e9c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
`;

export const ColumnVisibilityRestoreDefault = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #004869;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  text-transform: capitalize;
  cursor: pointer;
`;

export const DimmedOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Adjust the alpha value for transparency */
  z-index: 9;
  pointer-events: none; /* Allows interaction with elements beneath the overlay */
`;

export const TableStatsContainer = styled.div`
  color: var(--text, #2f353c);

  /* Body 12 */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
  margin: 10px;
`;

export const ActionsRightSide = styled.div`
  color: var(--text, #2f353c);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
  display: flex;
`;

// export const NewlyAssinedToggleContainer = styled.div`
//   margin-right: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
// `;
//
// export const NewlyAssignedLabel = styled.label`
//   margin: 0 auto;
// `;
