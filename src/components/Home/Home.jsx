import "./Home.scss";
import components from "..";
import BannerImg from "../../assets/banner-img.png";
const Home = () => {
  return (
    <div>
      <components.Banner />
      <div className="main-content">
        <div className="layout">
          <components.homeCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
