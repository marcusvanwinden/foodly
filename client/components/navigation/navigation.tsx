import React from 'react';
import css from './navigation.module.css';

export const Navigation: React.FC = () => (
  <nav className={css.root}>
    <ul className={css.navList}>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/basket">Basket</a>
      </li>
    </ul>
  </nav>
);
