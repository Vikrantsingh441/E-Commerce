import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";
import component from "..";
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="productImg" />
          </div>
          <div className="right">
            <span className="name">Product</span>
            <span className="price">prod d</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <div className="text-bold">
                Category:
                <span>Headphone</span>
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
        <component.RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
