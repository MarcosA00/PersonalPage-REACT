import React from "react";
import Article from "./Article";
import styles from '../styles/Content.module.css'

function Content() {
  return (
    <div className={styles.posts}>
      <Article 
        articleTitle='Articulo 1' 
        publishDate='Fecha de publicación' 
        articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      />

      <Article 
        articleTitle='Articulo 2' 
        publishDate='Fecha de publicación' 
        articleText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod aperiam cupiditate inventore maiores cumque quae atque neque, architecto similique distinctio et saepe eum consequuntur aliquid provident corporis adipisci veritatis incidunt quam. Quae nam quibusdam inventore! Sint quos ratione distinctio quo illo maxime, voluptate soluta earum ipsum temporibus doloremque, nisi magni incidunt, laboriosam debitis veritatis at. Impedit voluptates explicabo laborum perferendis. Omnis in dolore totam molestiae ea dignissimos ut quae natus aliquid quisquam alias soluta a quas tempore adipisci, pariatur quo. Dolor, fugit dolores? Veniam aliquid maxime eveniet maiores eos nobis unde minima quasi vel omnis quae nemo ea autem optio voluptas aliquam magni saepe libero nisi impedit itaque fugit, expedita eum. Voluptatum saepe corrupti velit, suscipit dolores deserunt consequuntur!'
      />
    </div>
  );
}

export default Content;