import React from 'react';
import { Product } from '../product/product';
import css from './product-list.module.css';

export interface ProductList {
  products: Product[];
}

export const ProductList: React.FC<ProductList> = ({ products }) => {
  return (
    <section className={css.productList}>
      <div className={css.container}>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};
