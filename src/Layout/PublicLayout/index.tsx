"use client";

// Next
import { usePathname } from "next/navigation";

// Layout
import Header from "@/Layout/Components/Public/Header";
import Footer from "@/Layout/Components/Public/Footer";

// Components
import Modal from "@/Layout/Components/Common/Modal";
import Toast from "@/Layout/Components/Common/Toast";

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
    <div className="dark:bg-main bg-background-perspective h-full w-full bg-cover bg-bottom bg-no-repeat">
      {!isGameRoute && <Header />}

      {children}

      <Modal />
      <Toast />
      {!isSuccessGameRoute && !isGameRoute && !isStartGameRoute && <Footer />}
    </div>
  );
};

export default Layout;
