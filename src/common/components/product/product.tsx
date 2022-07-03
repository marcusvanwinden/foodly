import React from 'react';
import css from './product.module.css';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const Product: React.FC<Product> = ({ name, price, imageUrl }) => (
  <article>
    <div className={css.image}>
      <img src={imageUrl} alt={name} />
    </div>
    <div className={css.content}>
      <h3 className={css.name}>{name}</h3>
      <span className={css.price}>&euro; {price}</span>
      <button className={css.addButton}>+</button>
    </div>
  </article>
);
