import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-2.webp";

import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="product" />
        </div>
        <div className="prod-details">
          <span className="name">Product Name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>4</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span>$ 5.69</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
