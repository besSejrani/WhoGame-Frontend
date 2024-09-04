// React
import React from "react";

// ==========================================================================================

// Interface
interface DataTableHeaderColumnsProps {
  columns: {
    name: string;
    width?: string;
  }[];
}

const DataTableHeaderColumns: React.FC<DataTableHeaderColumnsProps> = ({
  columns,
}) => {
  const gridTemplateColumns = columns
    .map((column) => column.width || "1fr")
    .join(" ");

  return (
    <div
      className="grid justify-between p-16 bg-white bg-opacity-10 text-2xl"
      style={{ gridTemplateColumns }}
    >
      {columns.map((column, index) => (
        <p key={index}>{column.name}</p>
      ))}
    </div>
  );
};

export default DataTableHeaderColumns;
