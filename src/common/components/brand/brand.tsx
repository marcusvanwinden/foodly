import React from 'react';
import { Link } from 'react-router-dom';
import css from './brand.module.css';

export const Brand: React.FC = () => (
  <h1 className={css.root}>
    <Link to="/">Foodly</Link>
  </h1>
);
