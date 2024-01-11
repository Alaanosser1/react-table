import React from "react";
import styled from "styled-components";
import { useTable, usePagination, useRowSelect } from "react-table";
import { useQuery } from "react-query";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "../pagination/Pagination";

// Container for the entire table
const Container = styled.div`
  margin: 0 auto;
  margin-top: 150px;
`;
const StyledTableContainer = styled.div`
  max-width: 1120px; /* or any fixed width you prefer */
  margin: 0 auto;
  margin-top: 150px;
  overflow-x: auto; /* use 'auto' instead of 'scroll' */
`;

const StyledTableBodyContainer = styled.tbody`
  min-width: 1120px;
  min-height: 514px;
`;

//Table Element
const StyledTable = styled.table`
  font-family: Poppins;
  border-collapse: separate;
  width: 100%;
`;

// Flex container for a table row
const StyledTableRow = styled.tr`
  display: flex;

  &:nth-child(odd):not(:first-child) {
    background-color: #f3faff;
  }
`;

// API endpoint
const API_ENDPOINT = "https://dummyjson.com/products";

// Fetch data function using React Query
const fetchData = async () => {
  const response = await fetch(API_ENDPOINT);
  return response.json();
};

// StyledLeadsTable component definition
const StyledLeadsTable = () => {
  // Use React Query's useQuery hook to fetch and manage data
  const { data, isLoading, isError } = useQuery("products", fetchData);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "title",
      },
      {
        Header: "Last Request",
        accessor: "brand", // You might want to update this with the correct accessor
      },
      {
        Header: "Campaign",
        accessor: (row: any) => row.description.substring(0, 19) + "...",
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
    [] // Empty dependency array to ensure useMemo runs once
  );

  // Check if data is available before using useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    pageOptions,
    prepareRow,
    selectedFlatRows,
    getToggleAllRowsSelectedProps,
  } = useTable(
    {
      columns,
      data: data?.products || [],
      initialState: { pageIndex: 0, pageSize: 8 },
    },
    usePagination,
    useRowSelect
  );

  // Render loading state if data is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state if an error occurred
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
