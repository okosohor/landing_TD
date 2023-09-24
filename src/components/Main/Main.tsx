/* eslint-disable max-len */
import React from 'react';
import { Form } from '../Form/Form';
import './Main.scss';
import min from './images/main-head-min.png';
import sejm from './images/main-head-sejm.png';
import bigImg from './images/big-img.png';
import aboutMan from './images/about-man.png';
import { Slider } from '../Slider/Slider';
import { CarouselLib } from '../Carousel/CarouselLib';
import { Description } from '../Description/Description';

export const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main__head">
        <div className="main__head-form">
          <Form />
        </div>
        <div className="main__head-description">
          <h2 className="main__head-title">Dzięki wsparciu </h2>
          <div className="main__head-img-group">
            <img src={min} alt="ministerstwo" className="main__head-img" />
            <img src={sejm} alt="sejm" className="main__head-img" />
          </div>
          <img src={bigImg} alt="" className="main__head-big-img" />
        </div>
      </div>
      <div className="main__about">
        <img src={aboutMan} alt="" className="main__about__img" />
        <div className="main__about-description">
          <h2 className="main__about-title">O projekcie</h2>
          <p className="main__about-text">Decyzja Ministerstwa Klimatu Rzeczypospolitej Polskiej oficjalnie potwierdza, że inwestycje w pierwszą elektrownię jądrowe w Polsce są zgodne z interesem publicznym oraz polityką prowadzoną przez państwo, zwłaszcza polityką energetyczną. Każdy obywatel Polski będzie mógł czerpać korzyści z energii wytwarzanej przez elektrownię jądrowe</p>
          <p className="main__about-text">&quot;Planowany projekt realizuje Polski Program Rozwoju Energii Jądrowej, jest zgodny z Polityką Energetyczną Polski do 2040 roku oraz odpowiada celom polityki klimatycznej Unii Europejskiej&quot; - głosi komunikat.</p>
          <p className="main__about-text main__about-text--bold">Aby rozpocząć pracę, prosimy o zarejestrowanie się na tej stronie i dokonanie minimalnej wpłaty w wysokości 1100 złotych.</p>
        </div>
        <div className="main__about-gradient">
          <h3 className="main__about-bottom-title">Mateusz Berger</h3>
          <p className="main__about-bottom-text">Prezes spółki Polskie Elektrownie Jądrowe (PEJ)</p>
        </div>
      </div>
      <div className="main__about-secondary">
        <div className="main__about-secondary-description">
          <h2 className="main__about-secondary-title">O spółce</h2>
          <p className="main__about-secondary-text">Jak zaznaczono, elektrownia jądrowe ma na celu zrekompensowanie przewidywanego wzrostu zapotrzebowania na energię elektryczną, stabilizację dostaw energii oraz dywersyfikację źródeł energii w kraju.</p>
          <p className="main__about-secondary-text">Zgodnie z zezwoleniem, inwestor może złożyć podania o dalsze decyzje administracyjne, zwłaszcza dotyczące określenia lokalizacji. Według Ministerstwa Klimatu i Środowiska, decyzję popiera 86% Polaków, z których większość wyraża zgodę na budowę elektrowni atomowej w pobliżu swojego miejsca zamieszkania.</p>
          <p className="main__about-secondary-text">W ramach Polskiego Programu Rozwoju Energii Jądrowej planowana jest budowa dwóch elektrowni atomowych.</p>
        </div>
        <button type="button" className="main__about-secondary-button">
          Zarejestruj się i zarabiaj
        </button>
        <p className="main__about-secondary-small-text">
          Dane rejestrowe spółki:
          <br />
          Polskie Elektrownie Jądrowe spółka z ograniczoną odpowiedzialnością z siedzibą w Warszawie, ul. Mokotowska 49, 00-542 Warszawa, spółka wpisana do Rejestru
          <br />
          przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla m. st. Warszawy w Warszawie, XII Wydział Gospodarczy Krajowego Rejestru
          <br />
          Sądowego pod numerem KRS: 0000347416, kapitał zakładowy 2.948.201.430 zł, NIP: 701 021 82 99, REGON: 142242032.
        </p>
      </div>
      <CarouselLib />
      <Slider />
      <Description />
      <div className="bot-form-container">
        <Form />
      </div>
    </div>
  );
};
