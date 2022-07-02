import React from 'react';
import css from './navigation.module.css';

export const Navigation: React.FC = () => (
  <nav className={css.root}>
    <ul className={css.navList}>
      <li>
        <a href="/profiel">Profiel</a>
      </li>
      <li>
        <a href="/winkelwagen">Winkelwagen</a>
      </li>
    </ul>
  </nav>
);
