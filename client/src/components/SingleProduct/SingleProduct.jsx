import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedinIn,
  FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-2.webp";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="product" />
          </div>
          <div className="right">
            <span className="name">Product Name</span>
            <span className="price">Price</span>
            <span className="desc">product desc</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Headphones</span>
              </span>
            </div>
            <div className="info-item">
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaPinterest size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
