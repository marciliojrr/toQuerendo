import SearchInput from "../../forms/SearchInput";
import Sidebar from "../Sidebar";
import { Container, Content, Logo } from "./styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo src="" alt="Logo tô querendo" />
        <SearchInput />
      </Content>
      <Content>
        <Sidebar />
      </Content>
    </Container>
  );
};

export default Header;
