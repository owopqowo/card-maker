import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = (props) => {
  const histroy = useHistory();
  const goToMaker = (userId) => {
    histroy.push({
      pathname: '/main',
      state: { id: userId },
    });
  };
  const onLogin = (e) => {
    props.authService.login(e.currentTarget.dataset.login).then((data) => {
      goToMaker(data.user.uid);
    });
  };

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
  return (
    <>
      <Header />
      <div className={styles.login}>
        <h2 className={styles.title}>login</h2>
        <div className={styles.buttons}>
          <button data-login='Google' className={styles.button} onClick={onLogin}>
            Login with Google
          </button>
          <button data-login='Github' className={styles.button} onClick={onLogin}>
            Login with GitHub
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
