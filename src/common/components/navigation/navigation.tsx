import React from 'react';
import { Link } from 'react-router-dom';
import css from './navigation.module.css';

export const Navigation: React.FC = () => (
  <nav className={css.root}>
    <ul className={css.navList}>
      <li>
        <Link to="/profiel">Profiel</Link>
      </li>
      <li>
        <Link to="/winkelwagen">Winkelwagen</Link>
      </li>
    </ul>
  </nav>
);
