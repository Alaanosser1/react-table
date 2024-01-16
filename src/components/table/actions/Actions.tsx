import React, { ReactNode, useState, useEffect, useRef } from "react";
import {
  ColumnVisibilityContainer,
  ColumnVisibilityCheckbox,
  ColumnVisibilityItemContainer,
  ColumnVisibilityItemLabel,
  ColumnVisibilityRestoreDefault,
  ActionsContainer,
  ColumnVisibilityButton,
  DimmedOverlay, // Import the DimmedOverlay styled component
} from "./ActionStyles";
import { ActionProps } from "./interface";

const Actions: React.FC<ActionProps> = ({
  allColumns,
  toggleHideAllColumns,
}) => {
  const [toggleColumnVisibilityContainer, setToggleColumnVisibilityContainer] =
    useState(false);

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
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setToggleColumnVisibilityContainer(false);
      }
    };

    const body = document.body;

    if (toggleColumnVisibilityContainer) {
      body.classList.add("no-scroll"); // Optional: Prevent scrolling when the overlay is active
      document.addEventListener("keydown", handleEscKey);
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggleColumnVisibilityContainer]);

  return (
    <>
      {toggleColumnVisibilityContainer && (
        <DimmedOverlay className="dimmed-overlay" />
      )}
      {toggleColumnVisibilityContainer && (
        <ColumnVisibilityContainer ref={visibilityContainerRef}>
          {allColumns.map((column: any) => (
            <ColumnVisibilityItemContainer key={column.id}>
              <ColumnVisibilityCheckbox
                type="checkbox"
                {...column.getToggleHiddenProps()}
              />
              <ColumnVisibilityItemLabel>
                {column.Header as ReactNode}
              </ColumnVisibilityItemLabel>
            </ColumnVisibilityItemContainer>
          ))}
          <ColumnVisibilityRestoreDefault
            onClick={() => toggleHideAllColumns(false)}
          >
            Restore Default
          </ColumnVisibilityRestoreDefault>
        </ColumnVisibilityContainer>
      )}
      <ActionsContainer>
        <div className=""></div>
        <ColumnVisibilityButton onClick={handleToggle}>
          Columns
        </ColumnVisibilityButton>
      </ActionsContainer>
    </>
  );
};

export default Actions;
