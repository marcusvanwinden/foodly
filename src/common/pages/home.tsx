import React from 'react';
import { ProductList } from '../components/product-list/product-list';
import { products } from '../utils/mock-products';

export const HomePage: React.FC = () => {
  return <ProductList products={products} />;
};
