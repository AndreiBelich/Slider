import React, { useRef } from 'react';
import useSlider from "hooks/useSlider";
import Slide from "components/Slider/Slide";
import SliderArrow from './SliderArrow';
import style from "./Slider.module.sass";

 function Slider() {
  const load = () =>  fetch("./slides.json").then(res => res.json());
  const { prevSlide, nextSlide, getSlide, ERROR_SLIDE } = useSlider(load);

  const imageRef = useRef(null);

  const onImageError = () => {
    imageRef.current.src = ERROR_SLIDE;
  }

  return (
    <article className={style.sliderWrapper}>
      <SliderArrow direction="left" handler={prevSlide}/>
      <Slide>
        <img ref={imageRef} onError={onImageError} src={getSlide()} alt="slide"/>
      </Slide>
      <SliderArrow direction="right" handler={nextSlide}/>
    </article>
  )
}

export default Slider;