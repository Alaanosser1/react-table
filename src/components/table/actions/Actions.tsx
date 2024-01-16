// Actions.tsx

import React, { ReactNode, useState, useEffect, useRef } from "react";
import ColumnVisibilityComponent from "./ColumnVisibility";
import {
  ActionsContainer,
  TableStatsContainer,
  ActionsRightSide,
  ColumnVisibilityButton,
} from "./ActionStyles";
import { ActionProps } from "./interface";

const Actions: React.FC<ActionProps> = ({
  allColumns,
  toggleHideAllColumns,
  rowsPerPage,
  totalNumberOfRows,
  state,
}) => {
  const [toggleColumnVisibilityContainer, setToggleColumnVisibilityContainer] =
    useState(false);
  const { pageIndex } = state;

  const visibilityContainerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setToggleColumnVisibilityContainer(!toggleColumnVisibilityContainer);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      visibilityContainerRef.current &&
      !visibilityContainerRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).classList.contains("dimmed-overlay")
    ) {
      setToggleColumnVisibilityContainer(false);
    }
  };

  useEffect(() => {
    const body = document.body;

    if (toggleColumnVisibilityContainer) {
      body.classList.add("no-scroll");
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggleColumnVisibilityContainer]);

  console.log(pageIndex, "INDEX");

  return (
    <>
      <ColumnVisibilityComponent
        allColumns={allColumns}
        toggleHideAllColumns={toggleHideAllColumns}
        visibilityContainerRef={visibilityContainerRef}
        isContainerVisible={toggleColumnVisibilityContainer}
        onHideContainer={() => setToggleColumnVisibilityContainer(false)}
      />
      <ActionsContainer>
        <TableStatsContainer>
          <strong>Leads</strong>
          &nbsp;{rowsPerPage * pageIndex + 1} - {rowsPerPage * (pageIndex + 1)}{" "}
          From {totalNumberOfRows}
        </TableStatsContainer>
        <ActionsRightSide className="">
          <ColumnVisibilityButton onClick={handleToggle}>
            Columns
          </ColumnVisibilityButton>
        </ActionsRightSide>
      </ActionsContainer>
    </>
  );
};

export default Actions;
