/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import face from './images/face.png';
import './CarouselLib.scss';
import rb from './images/ButtonRight.png';
import lb from './images/ButtonLeft.png';

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  const handleClickPrev = () => {
    if (previous) {
      previous();
    }
  };

  const handleClickNext = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className="carousel-button-group">
      <button
        className="carousel__button--left carousel__button"
        onClick={handleClickPrev}
      >
        <img className="carousel__button-img" src={lb} alt="left button" />
      </button>
      <button
        className="carousel__button--right carousel__button"
        onClick={handleClickNext}
      >
        <img className="carousel__button-img" src={rb} alt="right button" />
      </button>
    </div>
  );
};

export const CarouselLib: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="carousel__section">
      <h2 className="carousel__title">odpowiedz</h2>
      <div className="carousel__title-line"></div>
      <Carousel
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        swipeable={true}
        arrows={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        transitionDuration={1000}
        containerClass="carousel__container"
        dotListClass="custom-dot-list-style"
        // itemClass="carousel__item"
      >
        <div className="carousel__item">
          <img src={face} alt="" className="carousel__img" />
          <p className="carousel__text">
            Pracowalam jako nauczycielka prez 8 lat i nie moglam sobie pozwolic na wiele, bo moja
            pensja wynosila 4 tys. zl. Kiedy zobaczylem ogloszenie o zakupke akcji spolki gazowej,
            dlugo miale, watpliwosci, bo kwota inwestycji nie byla dla mnie mala.
            Po pol roku rzucilem prace, bo moj dochod jako inwestora wynosil 17 000 zl!

          </p>
          <p className="carousel__secondary-text">Julia Wojcik 42 lata</p>
        </div>
        <div className="carousel__item">
          <img src={face} alt="" className="carousel__img" />
          <p className="carousel__text">
            Pracowalam jako nauczycielka prez 8 lat i nie moglam sobie pozwolic na wiele, bo moja
            pensja wynosila 4 tys. zl. Kiedy zobaczylem ogloszenie o zakupke akcji spolki gazowej,
            dlugo miale, watpliwosci, bo kwota inwestycji nie byla dla mnie mala.
            Po pol roku rzucilem prace, bo moj dochod jako inwestora wynosil 17 000 zl!

          </p>
          <p className="carousel__secondary-text">Julia Wojcik 42 lata</p>
        </div>
        <div className="carousel__item">
          <img src={face} alt="" className="carousel__img" />
          <p className="carousel__text">
            Pracowalam jako nauczycielka prez 8 lat i nie moglam sobie pozwolic na wiele, bo moja
            pensja wynosila 4 tys. zl. Kiedy zobaczylem ogloszenie o zakupke akcji spolki gazowej,
            dlugo miale, watpliwosci, bo kwota inwestycji nie byla dla mnie mala.
            Po pol roku rzucilem prace, bo moj dochod jako inwestora wynosil 17 000 zl!

          </p>
          <p className="carousel__secondary-text">Julia Wojcik 42 lata</p>
        </div>
      </Carousel>
    </div>
  );
};
