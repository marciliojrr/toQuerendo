import {
  Container,
  Item,
  Header,
  ContentImage,
  Image,
  UserName,
  Comment,
} from "./styles";

const CommentsList = () => {
  return (
    <Container>
      <Item>
        <Header>
          <ContentImage>
            <Image src="" alt="Imagem do usuário" />
          </ContentImage>
          <UserName>Pythenson Souza</UserName>
        </Header>
        <Comment>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero maxime
          voluptate eligendi.
        </Comment>
      </Item>
      <Item>
        <Header>
          <ContentImage>
            <Image src="" alt="Imagem do usuário" />
          </ContentImage>
          <UserName>Pythenson Souza</UserName>
        </Header>
        <Comment>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero maxime
          voluptate eligendi.
        </Comment>
      </Item>
      <Item>
        <Header>
          <ContentImage>
            <Image src="" alt="Imagem do usuário" />
          </ContentImage>
          <UserName>Pythenson Souza</UserName>
        </Header>
        <Comment>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero maxime
          voluptate eligendi.
        </Comment>
      </Item>
    </Container>
  );
};

export default CommentsList;
