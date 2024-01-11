import "./App.css";
import LeadsTable from "./components/table/body/LeadsTable";
import styled from "styled-components";
import { queryClient } from "queryClient";
import { QueryClientProvider } from "react-query";

const StyledAppContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  overflow-x: hidden;
  background-color: gray;
`;

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StyledAppContainer>
          <LeadsTable />
        </StyledAppContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
