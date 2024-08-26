"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Eye } from "lucide-react";

import { icon, root } from "./index.css";

interface IDataTableActions {
  id?: string;
  viewPath?: string;
}

const DataTableActions: React.FC<IDataTableActions> = ({ id, viewPath }) => {
  const router = useRouter();

  console.log("id", id);

  return (
    <div className={root}>
      {viewPath && (
        <div
          className={icon}
          tabIndex={0}
          onClick={() => router.push(`${viewPath}/${id}`)}
          onKeyDown={(e) =>
            e.key === "Enter" && router.push(`${viewPath}/${id}`)
          }
        >
          <Eye strokeWidth={1.25} absoluteStrokeWidth />
        </div>
      )}
    </div>
  );
};

export default DataTableActions;
