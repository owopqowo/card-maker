import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <p>copyright</p>
    </footer>
  )
});

export default Footer;
