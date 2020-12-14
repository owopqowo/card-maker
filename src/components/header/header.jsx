import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header} data-type={props.login ? 'logout' : 'login'}>
      <h1 className={styles.title}>Card Maker</h1>
      {props.login && (
        <button className={styles.logout} onClick={props.onLogout}>
          Log Out
        </button>
      )}
    </header>
  );
};

export default Header;
