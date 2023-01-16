import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCart.module.css';

const HeaderCart = (props) => {
  const cartctx = useContext(CartContext);
  const totalAddedItems = cartctx.items.reduce((curValue, item) => {
    return curValue + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAddedItems}</span>
    </button>
  );
};

export default HeaderCart;
