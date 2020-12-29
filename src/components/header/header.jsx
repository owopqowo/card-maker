import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header} data-type={props.onLogout && 'login'}>
      <h1 className={styles.title}>Card Maker</h1>
      {props.onLogout && (
        <button className={styles.logout} onClick={props.onLogout}>
          Log Out
        </button>
      )}
    </header>
  );
};

export default Header;
