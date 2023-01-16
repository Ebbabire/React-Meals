import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const orderHandler = () => {
    cartctx.orderItem();
  };
  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartctx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClick={props.onClick}>
      <ul className={classes['cart-items']}>
        {cartctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartctx.totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>
          Close
        </button>
        {cartctx.items.length !== 0 && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
