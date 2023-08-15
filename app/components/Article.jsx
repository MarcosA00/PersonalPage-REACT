import React from "react";
import style from '../styles/Article.module.css'

function Article(props) {
  return(
    <div className={style.post}>
      <h2 className={style.title}>{props.articleTitle}</h2>

      <span className={style.date}>{props.publishDate}</span>

      <p className={style.articleText}>
        {props.articleText}
      </p>

      <a href="#" className={style.buttonMore}>{props.readMore}</a>
    </div>
  );
}

Article.defaultProps = {
  readMore: 'Leer más'
}

export default Article;