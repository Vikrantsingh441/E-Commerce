import "./Home.scss";
import { useEffect, useContext} from "react";
import components from "..";
import BannerImg from "../../assets/banner-img.png";
import { fetchDataFromApi } from "../../utils/api.js";
import { Context } from "../../utils/Context";

const Home = () => {
  const {categories,setCategories,products,setProducts} = useContext(Context)
  useEffect(() => {
    getCategories();
    getProducts()
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res)
    });
  }

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res)
    });


  };

  return (
    <div>
      <components.Banner />
      <div className="main-content">
        <div className="layout">
          <components.homeCategory categories={categories}/>
          <components.Products headingtext={"Popular products"}  products={products}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
