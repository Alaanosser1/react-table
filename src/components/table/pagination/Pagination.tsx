import React from "react";
import styled from "styled-components";
import { PaginationProps } from "./interface";

const PaginationContainer = styled.div`
  max-width: 1120px;
  width: 1120px;
  height: 70px;
  margin: 0 auto;
  margin-top: -2px;
  border-radius: 0px 0px 10px 10px;
  border-top: solid 1px #deebf4;

  background-color: #ffffff;
`;

const Pagination: React.FC<PaginationProps> = ({
  pageOptions,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  state,
}) => {
  const { pageIndex } = state;

  return (
    <>
      <PaginationContainer>
        <span>
          Page <strong>{pageIndex + 1}</strong> of {pageOptions.length}
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
