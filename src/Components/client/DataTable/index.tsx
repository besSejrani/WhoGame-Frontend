// React
import React from "react";

// Components
import DataTableHeaderColumns from "@Components/client/DataTable/DataTableHeaderColumns";
import DataTableRow from "@Components/client/DataTable/DataTableRow";

// ==========================================================================================

interface IDataTable {
  data: any[];
  columns: any[];
  totalPages?: number;
  size?: number;
}

const DataTable: React.FC<IDataTable> = ({
  data,
  columns,
  totalPages,
  size,
}) => {
  return (
    <div
      className={`
        w-full h-full my-8 overflow-hidden
        rounded-2xl shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.2),0_2px_6px_0_rgba(0,0,0,0.3)]
        `}
    >
      <DataTableHeaderColumns columns={columns} />

      <div className="h-[80rem] overflow-y-scroll">
        <div>
          {data?.map((item: any, index: number) => (
            <DataTableRow
              key={`index-${index}`}
              item={item}
              index={index}
              columns={columns}
            />
          ))}
        </div>
      </div>

      {/* {!totalPages && !size ? null : (
          <DataTableFooter totalPages={totalPages!} size={size!} />
        )} */}
    </div>
  );
};

export default DataTable;
