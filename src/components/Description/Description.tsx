import React from 'react';
import './Description.scss';
import img1 from './images/DescImage1.png';
import img2 from './images/DescImage2.png';
import img3 from './images/DescImage3.png';

export const Description: React.FC = () => {
  return (
    <div className="description">
      <div className="description__about">
        <h2 className="description__title">Dlaczego jest to korzystne dla zwyklych obywateli</h2>
        <div className="description__info">
          <img src={img1} alt="" className="description__img" />
          <p className="description__text">Znaczne zysli przy minimalnym ryzyku</p>
        </div>
        <div className="description__info">
          <img src={img2} alt="" className="description__img" />
          <p className="description__text">Jeden z najbardzuej dochhodowych aktywow</p>
        </div>
        <div className="description__info">
          <img src={img3} alt="" className="description__img" />
          <p className="description__text">Szybka wyplata srodkow dowolna karte Banku Polskiego</p>
        </div>
      </div>
      <div className="description__block">
        <h2 className="description__block-title">Jak zostac udzialowcem i zarobic na gazie do 118 44 PLN ??</h2>
        <p className="description__block-text">1. Wypelnij formularz rejestracyjny na tej stronie.</p>
        <p className="description__block-text">2. Zaczekaj i odbierz telefon od specjalisty, ktory uzupelni Twoje portfolio i zrobi wszystko za Ciebe.</p>
        <p className="description__block-text">3. Otrzymuj dzienny zysk z handlu gazem.</p>
      </div>
    </div>
  );
};
