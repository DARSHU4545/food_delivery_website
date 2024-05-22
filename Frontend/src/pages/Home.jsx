import Layout from "../components/Layout";
import Slider from "../components/Slider";
import Carditem from "../components/Card";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <div className="w-[100%] ">
        <Cards />
      </div>
    </Layout>
  );
};

export default Home;
