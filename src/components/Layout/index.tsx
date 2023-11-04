import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Body } from "./styles";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
};

export default Layout;
