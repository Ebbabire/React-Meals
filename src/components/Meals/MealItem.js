import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const cartCtx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredAmount <= 0 || enteredAmount > 5) {
      setIsAmountValid(false);
    } else {
      cartCtx.addItem({
        amount: +enteredAmount,
        id: props.id,
        name: props.name,
        price: props.price,
      });
      setIsAmountValid(true);
    }
    setEnteredAmount(1);
  };

  return (
    <div className={classes.mealItem}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{props.price.toFixed(2)}</p>
      </div>
      <div className={classes.input}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={enteredAmount}
            onChange={(e) => {
              setEnteredAmount(e.target.value);
            }}
          />
          <div className={classes.button}>
            <button type="submit">+Add</button>
            {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MealItem;
