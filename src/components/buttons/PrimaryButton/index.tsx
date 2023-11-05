import { ReactNode } from "react";
import { Container } from "./styles";

interface IPrimaryButtonProps {
  children: ReactNode;
}

const PrimaryButton = ({ children }: IPrimaryButtonProps) => {
  return <Container>{children}</Container>;
};

export default PrimaryButton;
