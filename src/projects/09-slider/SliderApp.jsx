import React, { useState } from 'react';
import SliderComp from './SliderComp';
import Title from '../components/Title';


export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(0);

  function handleSliderValueChange (e) {
    setSlideValue(e.target.value);
  }; 

  let bgColor;
  let textColor;

  if(slideValue < 25){
    bgColor = 'red'
    textColor = 'cyan'
  }
  if(slideValue >= 25 && slideValue<50){
    bgColor = 'cyan'
  }
  if(slideValue >= 50 && slideValue <100){
    bgColor = "purple"
  }

  return (
    <div className='container text-center'>
      <Title text={"Slide to grow"}/>
      <SliderComp setValue={slideValue} handleInput={handleSliderValueChange} bgColor={bgColor} textColor={textColor}/>
    </div>
  );
}
