import { InputHTMLAttributes } from "react";

export interface TableRowProps {
  page: any;
  prepareRow: any;
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

export interface TableHeaderProps {
  headerGroups: any;
  getToggleAllRowsSelectedProps: any;
}
