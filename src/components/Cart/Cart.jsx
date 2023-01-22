import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CartModals from "../UI/Modals/CartModals/CartModals";
import Button from "../UI/Button/Button";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemove = (id) => {
    cartCtx.removeItem(id);
  };

  const cartitems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAdd.bind(null, item)}
          onRemove={cartItemRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <>
      <CartModals onClose={props.onClose}>
        {cartitems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <Button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </Button>
          {hasItems && (
            <Button className={styles.button} onClick={props.onClose}>
              Order
            </Button>
          )}
        </div>
      </CartModals>
    </>
  );
};

export default Cart;
