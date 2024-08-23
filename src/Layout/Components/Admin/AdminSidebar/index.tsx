// AdminSidebar.tsx
import React from "react";
import NavigationLink from "@/Components/client/Navigation/NavigationLink";
import * as styles from "@/Layout/Components/Admin/AdminSidebar/index.css"; // Import the styles
import { BarChart2, Settings } from "lucide-react";

const AdminSidebar: React.FC = () => {
  return (
    <aside className={`${styles.root} ${styles.themeClass}`}>
      <div className={styles.fixedWrapper}>
        <nav className={styles.nav}>
          <div className={styles.content}>
            {/* Dashboard */}
            <p className={styles.heading}>Dashboard</p>
            <NavigationLink href="/admin" label="Leaderboard">
              <BarChart2
                strokeWidth={1.25}
                absoluteStrokeWidth={true}
                className={styles.icon}
              />
            </NavigationLink>
          </div>

          <div style={{ height: "8%" }}>
            <hr />
            {/* Settings */}
            <NavigationLink href="#" label="Settings">
              <Settings
                strokeWidth={1.25}
                absoluteStrokeWidth={true}
                className={styles.icon}
              />
            </NavigationLink>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
