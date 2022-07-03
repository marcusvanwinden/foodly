import React from 'react';
import { Header } from '../header/header';
import { ProductList } from '../product-list/product-list';
import { products } from '../../utils/mock-products';
import './app.module.css';

export const App: React.FC = () => (
  <>
    <Header />
    <ProductList products={products} />
  </>
);
