import React from 'react';
import { authService, firebaseInstance } from '../../service/firebase';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = (props) => {
  const history = useHistory();
  const onLogin = async (e) => {
    if(e.target.tagName === 'BUTTON') {
      let provider;
      const name = e.target.name;
      switch (name) {
        case 'google':
          provider = new firebaseInstance.auth.GoogleAuthProvider();
          break;
        case 'github':
          provider = new firebaseInstance.auth.GithubAuthProvider();
          break;
        default:
          break;
      }

      await authService.signInWithPopup(provider).then(function(result) {
        //history.push('/main');
      }).catch(function(error) {
        console.error(error.message);
      });
    }
  };
  return (
    <div className={styles.login}>
      <h2 className={styles.title}>login</h2>
      <div className={styles.buttons} onClick={onLogin}>
        <button name='google' className={styles.button}>Login with Google</button>
        <button name='github' className={styles.button}>Login with GitHub</button>
      </div>
    </div>
  );
};

export default Login;
