// React
import React from "react";

// Component
import NavigationLink from "@/Components/client/Navigation/NavigationLink";

// Icon
import { BarChart2, Settings } from "lucide-react";

// ========================================================================================================

const AdminSidebar: React.FC = () => {
  return (
    <aside className="sticky top-0 h-screen w-full z-10 bg-white dark:bg-dark">
      <div className="w-full h-full left-0 top-0 pt-[7.5rem] overflow-y-scroll shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.2),0_2px_6px_0_rgba(0,0,0,0.3)] dark:shadow-[0_4px_2px_-2px_rgba(255,255,255,0.2),0_2px_2px_0_rgba(255,255,255,0.2),0_2px_6px_0_rgba(255,255,255,0.3)]">
        <nav className="h-full w-full flex flex-col justify-between gap-12">
          <div className="h-full overflow-y-scroll w-full">
            {
              // ===============================================
              // Dashboard
              // ===============================================
            }
            <p className="text-[1.8rem] mt-12 mb-4 ml-8 text-dark dark:text-white">
              Game
            </p>
            <NavigationLink href="/admin" label="Leaderboard">
              <BarChart2
                strokeWidth={1.25}
                absoluteStrokeWidth={true}
                className="h-10 w-10 mr-8 dark:text-white"
              />
            </NavigationLink>
          </div>

          <div className="h-[8%]">
            <hr className="my-4" />

            {
              // ===============================================
              // Setting
              // ===============================================
            }
            <NavigationLink href="#" label="Settings">
              <Settings
                strokeWidth={1.25}
                absoluteStrokeWidth={true}
                className="h-10 w-10 mr-8 dark:text-white"
              />
            </NavigationLink>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
