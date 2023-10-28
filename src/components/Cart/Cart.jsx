import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/Context";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import components from "..";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in the Cart</span>
            <button className="return-cta">RETURN TO SHOP</button>
          </div>
        )}

        {!!cartItems?.length && (<>
          <components.CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">SubTotal:</span>
              <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>)}
      </div>
    </div>
  );
};

export default Cart;
