import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';

function App({FileInput, authService, cardRepository}) {
  return (
    <div className={styles.app}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact>
            <Login authService={authService} />
          </Route>
          <Route path='/main'>
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
