import "./Category.scss";
import Component from "../index";
const Category = () => {
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
        <Component.Products innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
