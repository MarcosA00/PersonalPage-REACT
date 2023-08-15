import React from "react";
import Form from "./Form";
import style from '../styles/Sidebar.module.css';

function Slider() {
  return (
    <div className={style.sidebar}>
      <div className={style.about}>
        <h4 className={style.siderTitle}><span className={style.sliderSpan}>¿Quién soy?</span></h4>

        <img 
          className={style.siderImg} 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Snail.jpg/1200px-Snail.jpg' 
          alt="Mi foto" 
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci maiores aut labore? Cumque deserunt, aperiam minima ad perferendis cum esse fugiat quas voluptatum vero!
        </p>
      </div>

      <Form />
    </div>
  );
}

export default Slider;