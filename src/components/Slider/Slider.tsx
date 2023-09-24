import React, { useState } from 'react';
import SliderMui from '@mui/material/Slider';
// import Typography from '@mui/material/Typography';
// import { makeStyles } from '@mui/styles';
import './Slider.scss';

export const Slider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(1100);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const zarobish = sliderValue * 7;

  return (
    <div className="slider">
      <h2 className="slider__title">lle będę zarabiał?</h2>
      <h3 className="slider__subtitle">Twoja inwesycja</h3>
      {/* <Typography variant="h6">{sliderValue}</Typography> */}
      <SliderMui
        min={1000}
        max={500000}
        value={sliderValue}
        onChange={handleSliderChange}
        aria-label="Small"
        valueLabelDisplay="on"
        sx={{ color: 'white' }}
      />
      <div className="slider__salary">
        <p className="slider__salary-text">1000</p>
        <p className="slider__salary-text">500 000+ PLN</p>
      </div>
      <div className="slider__description">
        <p className="slider__description-text">Zarobisz</p>
        <p className="slider__description-price">{zarobish}</p>
      </div>
      <button type="button" className="slider__button">Dołącz do nas</button>
    </div>
  );
};
