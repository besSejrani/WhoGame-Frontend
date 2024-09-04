// React
import React, { createElement } from "react";

// Date Library
import dayjs from "dayjs";

// ==========================================================================================

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

const getNestedProperty = (obj: any, path: string | number) => {
  if (typeof path !== "string") {
    return obj[path];
  }

  return path.split(".").reduce((currentObject, key) => {
    return currentObject ? currentObject[key] : undefined;
  }, obj);
};

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
      className={`p-8 grid items-center ${
        index % 2 === 0 ? "bg-black bg-opacity-5" : "bg-white bg-opacity-5"
      }`}
      style={{ gridTemplateColumns }}
    >
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="text-[1.6rem] py-4 px-0 opacity-85">
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
