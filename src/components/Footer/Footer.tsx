import React from 'react';
import './Footer.scss';
import liLogo from './images/linkedin_400x400.png';
import twitterLogo from './images/twitter.png';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__description">
          <p className="footer__description-text">Polskie Elektrownie Jądrowe sp. z o.o</p>
          <p className="footer__description-text">Aleje jerozolimskie 132/136, 02-305 Warszawa</p>
          <p className="footer__description-text">Tel.: (+48 22) 340 2980</p>
        </div>
        <div className="footer__socials">
          <a href="/" className="footer__socials-link">
            <img src={liLogo} alt="" className="footer__socials-img" />
          </a>
          <a href="/" className="footer__socials-link">
            <img src={twitterLogo} alt="" className="footer__socials-img" />
          </a>
        </div>
        <div className="footer__contacts">
          <a href="/" className="footer__contacts-link">Kontakt</a>
          <a href="/" className="footer__contacts-link">Polityka prywatności</a>
        </div>
      </div>
    </div>
  );
};
