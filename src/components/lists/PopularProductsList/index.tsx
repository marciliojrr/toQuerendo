import { AiFillStar, AiOutlineStar, AiTwotoneHeart } from "react-icons/ai";
import {
  Container,
  Item,
  Image,
  Name,
  Price,
  Assessment,
  IsFavorite,
} from "./styles";

interface IPopularProductsListProps {
  products: any[];
}

const PopularProductsList = ({ products }: IPopularProductsListProps) => {
  return (
    <Container>
      {products.map((product) => (
        <Item key={product.id}>
          {product.isFavorite && (
            <IsFavorite>
              <AiTwotoneHeart size={20} />
            </IsFavorite>
          )}
          <Image src="" alt="Imagem do produto" />
          <Name>{product.name}</Name>
          <Price>{`R$ ${(+product.price).toFixed(2)}`}</Price>
          <Assessment>
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiOutlineStar size={25} />
            <AiOutlineStar size={25} />
          </Assessment>
        </Item>
      ))}
    </Container>
  );
};

export default PopularProductsList;
