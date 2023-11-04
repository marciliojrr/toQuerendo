import { ReactNode } from "react";
import { Container, Content, Title } from "./styles";

interface ISectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: ISectionProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default Section;
