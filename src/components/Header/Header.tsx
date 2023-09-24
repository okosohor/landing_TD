import React from 'react';
import './Header.scss';
import { Navigation } from '../Navigation/Navigation';

export const Header:React.FC = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">Polskie Elektrownie Jądrowe sp. z o. o.</h1>
      </div>
      <Navigation />
    </div>
  );
};
