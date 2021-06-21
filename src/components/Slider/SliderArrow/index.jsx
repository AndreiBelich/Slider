import React from 'react';
import cn from "classnames";
import style from "./SliderArrow.module.sass";

function SliderArrow({direction, handler}) {
  const styles = cn(style.sliderArrow, {
    [style.leftArrow] : direction === "left",
    [style.rightArrow] : direction === "right"
  });
  return (
    <div className={styles} onClick={handler}></div>
  )
}

export default SliderArrow;
