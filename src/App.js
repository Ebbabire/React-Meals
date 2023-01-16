import React, { useState } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartContexProvider } from './store/cart-context';

export default function App() {
  const [modalShown, setModalShown] = useState(false);

  const modalCloseHandler = () => {
    setModalShown(false);
  };

  const modalShowHandler = () => {
    setModalShown(true);
  };

  return (
    <CartContexProvider>
      {modalShown && <Cart onClick={modalCloseHandler} />}
      <Header onClick={modalShowHandler} />
      <Meals />
    </CartContexProvider>
  );
}
