import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useState, useContext } from "react";
import prod from "../../assets/products/earbuds-prod-1.webp";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/Context";
import component from "..";
const SingleProduct = () => {
  const {handleAddToCart} = useContext(Context)
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    if(quantity>1){
      setQuantity((prevState) => prevState - 1);
    }
  };

  if (!data) return;
  debugger
  const product = data.data[0].attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product?.img?.data[0]?.attributes?.url
              }
              alt="productImg"
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handleAddToCart(data.data[0],quantity)
              }}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <div className="text-bold">
                Category:
                <span> {product.categories.data[0].attributes.title}</span>
              </div>
              <div className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <component.RelatedProducts productId={id}
        categoryId={product.categories.data[0].id}/>
      </div>
    </div>
  );
};

export default SingleProduct;
