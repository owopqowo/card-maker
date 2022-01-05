import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout}) => {
  return (
    <header className={styles.header} data-type={onLogout && 'login'}>
      <h1 className={styles.title}>Card Maker</h1>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Log Out
        </button>
      )}
    </header>
  );
});

export default Header;
