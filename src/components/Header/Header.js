import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assests/meals.jpg';
import HeaderCart from './HeaderCart';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCart onClick={props.onClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
