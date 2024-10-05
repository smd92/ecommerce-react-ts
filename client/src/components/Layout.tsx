import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/login"];

  return (
    <div className={`flex flex-col min-h-screen bg-color-theme1`}>
      {/* Header wird nur angezeigt, wenn der Pfad nicht in "noHeaderFooterRoutes" enthalten ist */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

      {/* Main Content */}
      {children}

      {/* Footer wird nur angezeigt, wenn der Pfad nicht in "noHeaderFooterRoutes" enthalten ist */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
