import React from "react";

import DataTableHeaderColumns from "@Components/client/DataTable/DataTableHeaderColumns";
import DataTableRow from "@Components/client/DataTable/DataTableRow";

import { body, paper, root, rows } from "./index.css";

interface IDataTable {
  data: any;
  columns: any;
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
    <div className={root}>
      <div className={paper}>
        <DataTableHeaderColumns columns={columns} />

        <div className={body}>
          <div className={rows}>
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
    </div>
  );
};

export default DataTable;

// import React from "react";
// import { style } from "@vanilla-extract/css";
// import DataTableHeaderColumns from "@Components/client/DataTable/DataTableHeaderColumns";
// import DataTableRow from "@Components/client/DataTable/DataTableRow";

// interface Column {
//   id: string;
//   label: string;
// }

// interface DataItem {
//   id: string;
//   [key: string]: any; // Allow any additional properties
// }

// interface IDataTable {
//   data: DataItem[];
//   columns: Column[];
//   totalPages?: number;
//   size?: number;
// }

// const root = style({
//   width: "100%",
// });

// const paper = style({
//   width: "100%",
//   height: "100%",
//   margin: "4rem 0rem",
//   overflow: "hidden",
// });

// const body = style({
//   height: "50rem",
//   overflowY: "scroll",
// });

// const rows = style({});

// // You can use CSS variables for dark mode
// const DARK_MODE = "@media (prefers-color-scheme: dark)";

// const DataTable: React.FC<IDataTable> = ({
//   data,
//   columns,
//   totalPages,
//   size,
// }) => {
//   return (
//     <div className={root}>
//       <div className={paper}>
//         <DataTableHeaderColumns columns={columns} />

//         <div className={body}>
//           <div className={rows}>
//             {data?.map((item: DataItem, index: number) => (
//               <DataTableRow
//                 key={`index-${index}`}
//                 item={item}
//                 index={index}
//                 columns={columns}
//               />
//             ))}
//           </div>
//         </div>

//         {/* {!totalPages && !size ? null : (
//           <DataTableFooter totalPages={totalPages!} size={size!} />
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default DataTable;
