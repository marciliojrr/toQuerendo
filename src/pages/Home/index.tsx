import Layout from "../../components/Layout";
import Carousel from "../../components/Layout/Carousel";
import Section from "../../components/Section";
import CategoryList from "../../components/lists/CategoryList";
import CommentsList from "../../components/lists/CommentsList";
import MostWantedList from "../../components/lists/MostWantedList";
import PopularProductsList from "../../components/lists/PopularProductsList";

const Home = () => {
  // Mocks
  const images = [
    "src/assets/img/banner_1.png",
    "src/assets/img/banner_2.png",
    "src/assets/img/banner_3.png",
  ];

  const products = [
    {
      id: "1",
      image: "",
      name: "Câmera digital",
      price: "500",
      assessment: 4,
      isFavorite: true,
    },
    {
      id: "2",
      image: "",
      name: "Headphones sem fio",
      price: "500",
      assessment: 4,
      isFavorite: false,
    },
    {
      id: "3",
      image: "",
      name: "Controle XBOX",
      price: "200",
      assessment: 4,
      isFavorite: true,
    },
    {
      id: "4",
      image: "",
      name: "Notebook Lenovo",
      price: "500",
      assessment: 4,
      isFavorite: false,
    },
    {
      id: "5",
      image: "",
      name: "Headphones sem fio",
      price: "500",
      assessment: 4,
      isFavorite: true,
    },
    {
      id: "6",
      image: "",
      name: "Notebook Lenovo",
      price: "2300",
      assessment: 4,
      isFavorite: true,
    },
    {
      id: "7",
      image: "",
      name: "Câmera digital",
      price: "350",
      assessment: 4,
      isFavorite: false,
    },
    {
      id: "8",
      image: "",
      name: "Controle XBOX",
      price: "220",
      assessment: 4,
      isFavorite: false,
    },
  ];

  return (
    <Layout>
      <Carousel images={images} />
      <Section title="Busca por categoria">
        <CategoryList />
      </Section>
      <Section title="Produtos populares">
        <PopularProductsList products={products} />
      </Section>
      <Section title="Serviços Mais Procurados">
        <MostWantedList />
      </Section>
      <Section title="">
        <CommentsList />
      </Section>
    </Layout>
  );
};

export default Home;
