import { Container, Item, Image, Name, Price, Assessment } from "./styles";

interface IPopularProductsListProps {
  products: any[];
}

const PopularProductsList = ({ products }: IPopularProductsListProps) => {
  return (
    <Container>
      {products.map((product) => (
        <Item key={product.id}>
          <Image src="" alt="Imagem do produto" />
          <Name>{product.name}</Name>
          <Price>{`R$ ${(+product.price).toFixed(2)}`}</Price>
          <Assessment></Assessment>
        </Item>
      ))}
    </Container>
  );
};

export default PopularProductsList;
