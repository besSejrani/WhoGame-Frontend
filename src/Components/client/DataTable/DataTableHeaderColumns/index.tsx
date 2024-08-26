import React from "react";

import { header, headerColumn } from "./index.css";

interface DataTableHeaderColumnsProps {
  columns: any[];
}

const DataTableHeaderColumns: React.FC<DataTableHeaderColumnsProps> = ({
  columns,
}) => {
  const gridTemplateColumns = columns
    .map((column) => column.width || "1fr")
    .join(" ");

  return (
    <div className={header} style={{ gridTemplateColumns }}>
      {columns.map((column, index) => (
        <p key={index} className={headerColumn}>
          {column.name}
        </p>
      ))}
    </div>
  );
};

export default DataTableHeaderColumns;
