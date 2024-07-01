"use client";

// Layout
import Header from "./Header";

// Components
import Modal from "@/Components/client/Modal";

// ==========================================================================================

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Modal />
    </div>
  );
};

export default Layout;
