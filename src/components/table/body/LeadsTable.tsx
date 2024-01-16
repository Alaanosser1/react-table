import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { useTable, usePagination, useRowSelect, useSortBy } from "react-table";
import { useQuery } from "react-query";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "../pagination/Pagination";
import {
  Container,
  StyledTableContainer,
  StyledTableBodyContainer,
  StyledTable,
  StyledTableRow,
} from "./BodyStyles";
import Actions from "../actions/Actions";

// API endpoint
const API_ENDPOINT = "https://dummyjson.com/products";

// Fetch data function using React Query
const fetchData = async () => {
  const response = await fetch(API_ENDPOINT);
  return response.json();
};

// StyledLeadsTable component definition
const StyledLeadsTable = () => {
  const { data, isLoading, isError } = useQuery("products", fetchData);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        minWidth: 31,
        maxWidth: 31,
      },
      {
        Header: "Name",
        accessor: (row: any) => row.title.substring(0, 15) + "...",
        minWidth: 150,
        maxWidth: 150,
      },
      {
        Header: "Last Request",
        accessor: "brand",
        minWidth: 150,
        maxWidth: 150,
      },
      {
        Header: "Contact",
        accessor: "contact",
        minWidth: 121,
      },
      {
        Header: "Campaign",
        accessor: (row: any) => row.description.substring(0, 15) + "...",
        minWidth: 121,
        maxWidth: 121,
      },
      {
        Header: "Status",
        accessor: "category",
        minWidth: 121,
        maxWidth: 121,
      },
      {
        Header: "Adset",
        accessor: "stock",
        minWidth: 143,
        maxWidth: 143,
      },
      {
        Header: "Agent",
        accessor: "discountPercentage",
        minWidth: 115,
        maxWidth: 115,
      },
      {
        Header: "Last Contact",
        accessor: "price",
        minWidth: 156,
        maxWidth: 156,
      },
      {
        Header: "Last Comment",
        accessor: "rating",
        minWidth: 252,
        maxWidth: 252,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    state,
    pageOptions,
    prepareRow,
    selectedFlatRows,
    getToggleAllRowsSelectedProps,
    setPageSize,
    allColumns,
    toggleHideAllColumns,
  } = useTable(
    {
      columns,
      data: data?.products || [],
      initialState: { pageIndex: 0, pageSize: rowsPerPage },
    },
    useSortBy,
    usePagination,
    useRowSelect
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      {console.log(data.products.length, "DATA")}
      <Container>
        <Actions
          allColumns={allColumns}
          toggleHideAllColumns={toggleHideAllColumns}
          totalNumberOfRows={data.products.length}
          rowsPerPage={rowsPerPage}
          state={state}
        />
        <StyledTableContainer>
          <StyledTable {...getTableProps()}>
            <StyledTableBodyContainer {...getTableBodyProps()}>
              {/* Header row */}
              <StyledTableRow>
                <TableHeader
                  headerGroups={headerGroups}
                  getToggleAllRowsSelectedProps={getToggleAllRowsSelectedProps}
                />
              </StyledTableRow>
              {/* Data rows */}
              <TableRow page={page} prepareRow={prepareRow} columns={columns} />
            </StyledTableBodyContainer>
          </StyledTable>
        </StyledTableContainer>
        <Pagination
          pageOptions={pageOptions}
          nextPage={nextPage}
          previousPage={previousPage}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          state={state}
          gotoPage={gotoPage}
          setPageSize={setPageSize}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Container>
      <pre>
        {JSON.stringify(
          {
            selectedFlatRows: selectedFlatRows.map((row) => row.original),
          },
          null,
          2
        )}
      </pre>
    </>
  );
};

export default StyledLeadsTable;
