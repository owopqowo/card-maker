import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import styles from './app.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './components/login/login';
import Cards from './components/cards/cards';
import Edite from './components/edite/edite';

function App(props) {
  const [login, setLogin] = useState(null);
  const onLogin = (e) => {
    props.authService.login(e.currentTarget.dataset.login).then(function () {
      setLogin(true);
    });
  };
  const onLogout = () => {
    props.authService.logout().then(function () {
      setLogin(false);
    });
  };
  return (
    <BrowserRouter>
      <Header login={login} onLogout={onLogout} />
      <Switch>
        <Route path='/' exact>
          {login ? <Redirect to='/main' /> : <Login login={login} onLogin={onLogin} />}
        </Route>
        <Route path='/main'>
          {login ? (
            <main className={styles.main}>
              <Cards />
              <Edite />
            </main>
          ) : (
            <Redirect to='/' />
          )}
        </Route>
      </Switch>
      {login && <Footer />}
    </BrowserRouter>
  );
}

export default App;
