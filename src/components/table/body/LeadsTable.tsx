import React, { useState } from "react";
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
      },
      {
        Header: "Name",
        accessor: (row: any) => row.title.substring(0, 15) + "...",
      },
      {
        Header: "Last Request",
        accessor: "brand", // You might want to update this with the correct accessor
      },
      {
        Header: "Campaign",
        accessor: (row: any) => row.description.substring(0, 15) + "...",
      },
      {
        Header: "Adset",
        accessor: "stock", // Update this with the correct accessor
      },
      {
        Header: "Status",
        accessor: "category", // Update this with the correct accessor
      },
      {
        Header: "Agent",
        accessor: "discountPercentage", // Update this with the correct accessor
      },
      {
        Header: "Last Contact",
        accessor: "price", // Update this with the correct accessor
      },
      {
        Header: "Last Comment",
        accessor: "rating", // Update this with the correct accessor
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
      <Container>
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
              <TableRow page={page} prepareRow={prepareRow} />
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
