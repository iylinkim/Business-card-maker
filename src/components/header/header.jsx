import React from "react";
import styles from './header.module.css';

const Header = props => (
  <header className={styles.header}>
    <h1 className={styles.logo}>
      <img src='/images/logo.png' alt='logo' />
      <span>Business Card Maker</span>
    </h1>
    <button>LOG OUT</button>
  </header>
);

export default Header;
