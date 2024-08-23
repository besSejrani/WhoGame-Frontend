// Layout
import AdminHeader from "@/Layout/Components/Admin/AdminHeader";
import AdminSidebar from "@/Layout/Components/Admin/AdminSidebar";

// Components
import Modal from "@/Layout/Components/Common/Modal";
import Toast from "@/Layout/Components/Common/Toast";

// ==========================================================================================

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  // ===========================
  // Routes
  // ===========================

  return (
    <div>
      <AdminHeader />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 9fr",
          gridColumnGap: "4rem",
        }}
      >
        <AdminSidebar />
        <div style={{ margin: "12rem 4rem 0rem 0rem" }}>{children}</div>
      </div>

      <Modal />
      <Toast />
    </div>
  );
};

export default Layout;
