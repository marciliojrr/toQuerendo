import Layout from "../../components/Layout";
import Carousel from "../../components/Layout/Carousel"

const Home = () => {
  const images = [
    "src/assets/img/banner_1.png",
    "src/assets/img/banner_2.png",
    "src/assets/img/banner_3.png"
  ];
  return (
    <Layout>
      <Carousel images={images}/>
    </Layout>
  );
};

export default Home;
