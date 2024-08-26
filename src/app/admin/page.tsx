// React
import { Suspense } from "react";

// Components
import Loading from "@Components/client/Loading";
import DataTable from "@Components/client/DataTable";
import DataTableActions from "@Components/client/DataTable/DataTableActions";

// DynamoDB
import { scanTable } from "@AWS/DynamoDB";

// ========================================================================================================

type Leaderboard = {
  session_id: string;
  attempts: number;
  email: string;
  name: string;
  organization: string;
  person: string;
  time: Date;
};

const AdminLeaderboard = async () => {
  // ===========================
  // Data
  // ===========================
  const data = (await scanTable({ tableName: "leaderboard" })) as Leaderboard[];

  const columns = [
    {
      name: "Session ID",
      dataField: "session_id",
    },
    {
      name: "Name",
      dataField: "name",
    },
    {
      name: "Email",
      dataField: "email",
    },
    {
      name: "Person",
      dataField: "person",
    },
    {
      name: "Attempts",
      dataField: "attempts",
    },
    {
      name: "Time",
      dataField: "time",
    },
    {
      name: "Actions",
      dataField: "session_id",
      component: DataTableActions,
      componentProps: {
        viewPath: "/admin/leaderboard",
      },
    },
  ];

  return (
    <div style={{ height: "100%" }}>
      <Suspense fallback={<Loading />}>
        {true ? (
          <DataTable
            data={data}
            columns={columns}

            // totalPages={paginationCount}
            // size={sizes}
          />
        ) : null}
      </Suspense>
    </div>
  );
};

export default AdminLeaderboard;
