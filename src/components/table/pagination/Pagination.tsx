import React from "react";
import { PaginationProps, PaginationButtonProps } from "./interface";
import {
  PaginationContainer,
  NextButton,
  PreviousButton,
  FirstPageButton,
  PageButton,
  LastPageButton,
  PaginationSection,
  RowsPerPageSelect,
  PaginationButtonsDesktopWrapper,
  PaginationMobileDesktopWrapper,
  PageSelection,
} from "./PaginationStyles";

const Pagination: React.FC<PaginationProps> = ({
  pageOptions,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  state,
  gotoPage,
  setPageSize,
  rowsPerPage,
  setRowsPerPage,
}) => {
  const { pageIndex } = state;

  const handleRowsPerPageSelection = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPageSize(Number(e.target.value));
    setRowsPerPage(e.target.value);
  };

  const handlePageSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    gotoPage(Number(e.target.value));
  };

  return (
    <>
      <PaginationContainer>
        <div className=""></div>
        <PaginationSection>
          <RowsPerPageSelect
            onChange={handleRowsPerPageSelection}
            value={rowsPerPage}
          >
            {Array.from({ length: 41 }, (_, index) => index + 8).map(
              (value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            )}
          </RowsPerPageSelect>
          <NextButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          ></NextButton>
          <PaginationButtonsDesktopWrapper>
            {pageOptions.map((page: number) => {
              return page == 0 ? (
                <FirstPageButton
                  isActive={pageIndex == page}
                  onClick={() => gotoPage(page)}
                >
                  {page + 1}
                </FirstPageButton>
              ) : page > 0 && page < pageOptions.length - 1 ? (
                <PageButton
                  isActive={pageIndex == page}
                  onClick={() => gotoPage(page)}
                >
                  {page + 1}
                </PageButton>
              ) : (
                page == pageOptions.length - 1 && (
                  <LastPageButton
                    isActive={pageIndex == page}
                    onClick={() => gotoPage(page)}
                  >
                    {page + 1}
                  </LastPageButton>
                )
              );
            })}
          </PaginationButtonsDesktopWrapper>
          <PaginationMobileDesktopWrapper>
            <PageSelection onChange={handlePageSelection} value={pageIndex}>
              {pageOptions.map((value: any) => (
                <option key={value} value={value}>
                  {value + 1}
                </option>
              ))}
            </PageSelection>
          </PaginationMobileDesktopWrapper>
          <PreviousButton
            onClick={() => nextPage()}
            disabled={!canNextPage}
          ></PreviousButton>
        </PaginationSection>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
