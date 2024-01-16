export interface ActionProps {
  allColumns: any;
  toggleHideAllColumns: any;
  totalNumberOfRows: number;
  rowsPerPage: number;
  state: any;
}
export interface ColumnVisibilityProps {
  allColumns: any[]; // Adjust the type based on your column data structure
  toggleHideAllColumns: (value: boolean) => void;
  visibilityContainerRef: React.RefObject<HTMLDivElement>;
  isContainerVisible: boolean;
  onHideContainer: () => void;
}
