import Button from "../UI/Button/Button";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button onClick={props.onRemove}>-</Button>
        <Button onClick={props.onAdd}>+</Button>
        {/* <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default CartItem;
