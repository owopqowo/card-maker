import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { authService } from './service/firebase';
import styles from './app.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './components/login/login';
import Cards from './components/cards/cards';
import Edite from './components/edite/edite';

function App() {
  const [isLogin, setLogin] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged(function(user) {
      if (user) {
        setLogin(user);
      } else {
        setLogin(null);
      }
    });
  });
  
  return (
    <BrowserRouter>
      <Header display={isLogin && 'login'} />
      <div className={isLogin ? styles.main : styles.login}>
        <Switch>
          <Route path="/" exact>
            {isLogin ? (
              <Redirect to="/main" />
            ) : (
              <Login />
            ) }
          </Route>
          <Route path="/main">
            {isLogin ? (
              <div className={isLogin ? styles.contents : ''}>
                <Cards />
                <Edite />
              </div>
            ) : (
              <Redirect to="/" />
            ) }
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
