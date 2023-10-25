import components from "../..";

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <components.Products innerPage={false} headingtext={"Related Products"}/>
    </div>
  );
};

export default RelatedProducts;
