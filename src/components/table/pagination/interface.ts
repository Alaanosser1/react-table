export interface PaginationProps {
  pageOptions: any;
  canPreviousPage: any;
  previousPage: any;
  nextPage: any;
  canNextPage: any;
  state: any;
  gotoPage: any;
  setPageSize: any;
  rowsPerPage: number;
  setRowsPerPage: any;
}

export interface PaginationButtonProps {
  isActive: boolean;
}
