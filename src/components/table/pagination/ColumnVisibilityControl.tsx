import { ReactNode } from "react";
import {
  ColumnVisibilityCheckbox,
  ColumnVisibilityContainer,
} from "../actions/ActionStyles";
import { PaginationContainer } from "./PaginationStyles";

const ColumnVisibilityControl = () => {
  return (
    <>
      {/* <ColumnVisibilityContainer>
        <div>
          <ColumnVisibilityCheckbox
            type="checkbox"
            {...getToggleHideAllColumnsProps()}
          />
          Toggle All
        </div>
        {allColumns.map((column) => (
          <label>
            <ColumnVisibilityCheckbox
              type="checkbox"
              {...column.getToggleHiddenProps()}
            />
            {column.Header as ReactNode}
          </label>
        ))}
        <br />
      </ColumnVisibilityContainer> */}
    </>
  );
};

export default ColumnVisibilityControl;
