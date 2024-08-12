"use client";

// Next
import { usePathname } from "next/navigation";

// Layout
import Header from "@/Layout/Components/Header";
import Footer from "@/Layout/Components/Footer";

// Components
import Modal from "@Layout/Components/Modal";
import Toast from "@Layout/Components/Toast";

// ==========================================================================================

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const pathname = usePathname();

  // ===========================
  // Routes
  // ===========================
  const isGameRoute = pathname.startsWith("/game");
  const isStartGameRoute = pathname.startsWith("/start-game");
  const isSuccessGameRoute = pathname.startsWith("/success-game");

  return (
    <div>
      {!isGameRoute && <Header />}
      {children}

      <Modal />
      <Toast />
      {!isSuccessGameRoute && !isGameRoute && !isStartGameRoute && <Footer />}
    </div>
  );
};

export default Layout;
