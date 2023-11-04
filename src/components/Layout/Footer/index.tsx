import {
  AiOutlineGoogle,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import {
  Container,
  Section,
  Logo,
  FirstContent,
  AddressText,
  ContentSocialMidia,
  ItemSocial,
  Title,
  ContentItems,
  Item,
  Link,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Section>
        <Logo src="" alt="Logo tô querendo" />
        <FirstContent>
          <AddressText>Rua CodeBlocks, nº 1024, Celândia</AddressText>
          <ContentSocialMidia>
            <ItemSocial>
              <AiOutlineGoogle size={35} />
            </ItemSocial>
            <ItemSocial>
              <AiOutlineFacebook size={35} />
            </ItemSocial>
            <ItemSocial>
              <AiOutlineWhatsApp size={35} />
            </ItemSocial>
          </ContentSocialMidia>
        </FirstContent>
      </Section>
      <Section>
        <Title>Encontre produtos</Title>
        <ContentItems>
          <Item>
            <Link>Vídeo-games</Link>
          </Item>
          <Item>
            <Link>Teclados</Link>
          </Item>
          <Item>
            <Link>Quadros</Link>
          </Item>
          <Item>
            <Link>Notebook gamer</Link>
          </Item>
          <Item>
            <Link>Gabinete RGB</Link>
          </Item>
        </ContentItems>
      </Section>
      <Section>
        <Title>Encontre serviços</Title>
        <ContentItems>
          <Item>
            <Link>Técnico de Informática</Link>
          </Item>
          <Item>
            <Link>Encanador</Link>
          </Item>
          <Item>
            <Link>Programador</Link>
          </Item>
          <Item>
            <Link>{`Psicólogo(a)`}</Link>
          </Item>
          <Item>
            <Link>Reforço Escolar</Link>
          </Item>
        </ContentItems>
      </Section>
      <Section>
        <Title>Sobre nós</Title>
        <ContentItems>
          <Item>
            <Link>Novidades</Link>
          </Item>
          <Item>
            <Link>Serviços</Link>
          </Item>
          <Item>
            <Link>Políticas de privacidade</Link>
          </Item>
          <Item>
            <Link>Ajuda</Link>
          </Item>
          <Item>
            <Link>FAQ</Link>
          </Item>
        </ContentItems>
      </Section>
    </Container>
  );
};

export default Footer;
