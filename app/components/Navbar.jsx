import React from "react";
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <h1 className={styles.logo}>Marcos CR</h1>
      </div>

      <div className={styles.clearFix}></div>

      <nav className={styles.menu}>
        <ul>
          <li className={styles.li}><a href="#" className={styles.buttonMenu}>Inicio</a></li>
          <li className={styles.li}><a href="#" className={styles.buttonMenu}>Reloj</a></li>
          <li className={styles.li}><a href="#" className={styles.buttonMenu}>Sobre de mi</a></li>
          <li className={styles.li}><a href="#" className={styles.buttonMenu}>Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;