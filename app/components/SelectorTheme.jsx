import React from "react";
import style from '../styles/SelectorTheme.module.css';

function SelectorTheme() {
  return (
    <div className={style.selectorTheme}>
      <div className={style.toRed}></div>
      <div className={style.toGreen}></div>
      <div className={style.toBlue}></div>
    </div>
  );
}

export default SelectorTheme;