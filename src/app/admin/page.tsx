export const dynamic = "force-dynamic";

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
  score: number;
};

const AdminLeaderboard = async () => {
  // ===========================
  // Data
  // ===========================
  const data = (await scanTable({ tableName: "leaderboard" })) as Leaderboard[];

  console.log("data", data);

  const columns = [
    {
      name: "Name",
      dataField: "name",
    },
    {
      name: "Email",
      dataField: "email",
    },
    {
      name: "Organization",
      dataField: "organization",
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
      name: "Score",
      dataField: "score",
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
    <div>
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
