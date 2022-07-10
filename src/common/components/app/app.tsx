import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../header/header';
import { HomePage } from '../../pages/home';
import { ProfilePage } from '../../pages/profile';
import { CartPage } from '../../pages/cart';
import { NotFoundPage } from '../../pages/not-found';
import './app.module.css';

export const App: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="profiel" element={<ProfilePage />} />
      <Route path="winkelwagen" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);
