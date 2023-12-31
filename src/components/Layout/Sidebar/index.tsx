import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Container, Content, Item } from "./styles";

const Sidebar = () => {
  return (
    <Container>
      <Content>
        <Item>
          <AiOutlineUser size={25} />
          Login
        </Item>
        <Item>
          <AiOutlineHeart size={25} />
          Favoritos
        </Item>
        <Item>
          <AiOutlineShoppingCart size={25} />
          Criar Anúncio
        </Item>
      </Content>
    </Container>
  );
};

export default Sidebar;
