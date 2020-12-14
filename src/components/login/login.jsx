import React from 'react';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = (props) => {
  return (
    <div className={styles.login}>
      <h2 className={styles.title}>login</h2>
      <div className={styles.buttons}>
        <button data-login='Google' className={styles.button} onClick={props.onLogin}>
          Login with Google
        </button>
        <button data-login='Github' className={styles.button} onClick={props.onLogin}>
          Login with GitHub
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
