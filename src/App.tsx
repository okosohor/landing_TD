import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
