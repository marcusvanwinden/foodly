import React from 'react';
import css from './search.module.css';

export const Search: React.FC = () => (
  <input
    className={css.root}
    placeholder="Waar ben je naar op zoek?"
    type="search"
  />
);
