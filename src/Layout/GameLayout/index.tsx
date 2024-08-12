// Components
import Modal from "@Layout/Components/Modal";
import Toast from "@Layout/Components/Toast";

// ==========================================================================================

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      {children}

      <Modal />
      <Toast />
    </div>
  );
};

export default Layout;
