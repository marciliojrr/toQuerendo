import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Body } from "./styles";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default Layout;
