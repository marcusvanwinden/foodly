import React from 'react';
import { Brand } from '../brand/brand';
import { Navigation } from '../navigation/navigation';
import { Search } from '../search/search';
import css from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={css.root}>
      <div className={css.container}>
        <Brand />
        <Navigation />
        <Search />
      </div>
    </header>
  );
};
