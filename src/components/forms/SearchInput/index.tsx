import { Container, TextInput, BtnSearch } from "./styles";

const SearchInput = () => {
  return (
    <Container>
      <TextInput placeholder="Digite o que você quer buscar" />
      <BtnSearch>Buscar</BtnSearch>
    </Container>
  );
};

export default SearchInput;
