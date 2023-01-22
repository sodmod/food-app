import { forwardRef } from "react";

import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <>
      <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.input.label}</label>
        <input ref={ref} id={props.input.id} {...props.input} />
      </div>
    </>
  );
});

export default Input;
