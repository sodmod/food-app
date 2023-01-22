import { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

import styles from "./HeaderCartButton.module.css";
import Button from "../../UI/Button/Button";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <Button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </Button>
    </>
  );
};

export default HeaderCartButton;
