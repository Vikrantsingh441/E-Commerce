import "./Products.scss";
import components from "..";
const Products = ({ innerPage, headingtext,products}) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingtext}</div>}

      <div className="products">
        {products?.data?.map((item)=>(
          <components.Product  key={item.id} id={item.id} data={item.attributes}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
