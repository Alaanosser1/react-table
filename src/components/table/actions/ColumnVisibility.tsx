import { ReactNode, useEffect } from "react";
import { ColumnVisibilityProps } from "./interface";
import {
  DimmedOverlay,
  ColumnVisibilityContainer,
  ColumnVisibilityItemContainer,
  ColumnVisibilityCheckbox,
  ColumnVisibilityItemLabel,
  ColumnVisibilityRestoreDefault,
} from "./ActionStyles";

const ColumnVisibilityComponent: React.FC<ColumnVisibilityProps> = ({
  allColumns,
  toggleHideAllColumns,
  visibilityContainerRef,
  isContainerVisible,
  onHideContainer,
}) => {
  const handleRestoreDefault = () => {
    toggleHideAllColumns(false);
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onHideContainer();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        visibilityContainerRef.current &&
        !visibilityContainerRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).classList.contains("dimmed-overlay")
      ) {
        onHideContainer();
      }
    };

    const body = document.body;

    if (isContainerVisible) {
      body.classList.add("no-scroll");
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
  }, [isContainerVisible, onHideContainer, visibilityContainerRef]);

  return (
    <>
      {isContainerVisible && <DimmedOverlay className="dimmed-overlay" />}
      {isContainerVisible && (
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
          <ColumnVisibilityRestoreDefault onClick={handleRestoreDefault}>
            Restore Default
          </ColumnVisibilityRestoreDefault>
        </ColumnVisibilityContainer>
      )}
    </>
  );
};

export default ColumnVisibilityComponent;
