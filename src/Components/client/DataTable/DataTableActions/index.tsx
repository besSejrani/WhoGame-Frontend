"use client";

// React
import React from "react";

// Next
import { useRouter } from "next/navigation";

// Icon
import { Eye } from "lucide-react";

// ==========================================================================================

// Interface
interface IDataTableActions {
  id?: string;
  viewPath?: string;
}

const DataTableActions: React.FC<IDataTableActions> = ({ id, viewPath }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between w-full">
      {viewPath && (
        <div
          className="
            text-2xl text-black 
            p-2 rounded-lg mr-4 cursor-pointer
            flex justify-center items-center
            relative
            shadow-[0_2px_1px_-1px_rgba(0,0,0,0.3),0_1px_1px_0_rgba(0,0,0,0.3),0_1px_3px_0_rgba(0,0,0,0.4)]
            dark:text-white dark:shadow-[0_2px_1px_-1px_rgba(255,255,255,0.3),0_1px_1px_0_rgba(255,255,255,0.3),0_1px_3px_0_rgba(255,255,255,0.4)]
          "
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
