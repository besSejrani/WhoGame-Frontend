import React, { createElement } from "react";

import { cell, row, rowVariants } from "./index.css";

import dayjs from "dayjs";

const getNestedProperty = (obj: any, path: string | number) => {
  if (typeof path !== "string") {
    return obj[path];
  }

  return path.split(".").reduce((currentObject, key) => {
    return currentObject ? currentObject[key] : undefined;
  }, obj);
};

interface Column {
  width?: string;
  component?: React.ComponentType<any>;
  componentProps?: any;
  dataField: string;
  dataType?: string;
  dateFormat?: string;
  render?: (item: any) => React.ReactNode;
}

interface DataTableRowProps {
  item: any;
  index: number;
  columns: Column[];
}

const DataTableRow: React.FC<DataTableRowProps> = ({
  item,
  index,
  columns,
}) => {
  const gridTemplateColumns = columns
    .map((column) => column.width || "1fr")
    .join(" ");

  return (
    <div
      className={`${row} ${
        index % 2 === 0 ? rowVariants.even : rowVariants.odd
      }`}
      style={{ gridTemplateColumns }}
    >
      {columns.map((column, colIndex) => (
        <div key={colIndex} className={cell}>
          {column.component
            ? createElement(column.component, {
                ...column.componentProps,
                data: item,
                id: item[column.dataField],
              })
            : column.render
            ? column.render(item)
            : column.dataType === "date"
            ? dayjs(getNestedProperty(item, column.dataField)).format(
                column.dateFormat || "DD.MM.YYYY"
              )
            : typeof getNestedProperty(item, column.dataField) === "boolean"
            ? getNestedProperty(item, column.dataField)
              ? "Yes"
              : "No"
            : getNestedProperty(item, column.dataField)}
        </div>
      ))}
    </div>
  );
};

export default DataTableRow;
