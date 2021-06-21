import React from 'react';
import style from "./Slide.module.sass";

function Slide({children}) {
  return (
    <div className={style.slideWrapper}>
      { children }
    </div>
  )
}

export default Slide;