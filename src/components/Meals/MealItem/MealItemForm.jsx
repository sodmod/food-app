import { useRef, useState } from "react";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHanlder = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const input = {
    id: "amount",
    type: "number",
    label: "Amount",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitHanlder}>
        <Input ref={amountInputRef} input={input} />
        <Button>+ Add</Button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    </>
  );
};

export default MealItemForm;
