import React from 'react';
import { firebaseInstance } from '../../service/firebase';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
  const history = useHistory();
  const logOut = () => {
    firebaseInstance.auth().signOut().then(function() {
      history.push('/');
    }).catch(function(error) {
      console.error(error);
    });
  }
  return (
    <header className={`${styles.header} ${props.display === 'login' ? styles.login : ''}`}>
      <h1 className={styles.title}>Card Maker</h1>
      <button className={styles.logout} onClick={logOut}>Log Out</button>
    </header>
  )
}

export default Header;
