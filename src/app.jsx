import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';

function App(props) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Redirect from='/card-maker' to='/' />
          <Route path='/' exact>
            <Login authService={props.authService} />
          </Route>
          <Route path='/main'>
            <Maker authService={props.authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
