import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

=======
import React, { Component } from 'react';
import RegisterTalent from './page/RegisterTalent'
import RegisterRecruiter from './page/RegisterRecruiter'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
>>>>>>> page-register-fiqry

function App () {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RegisterTalent} />
          <Route path="/recruiter" component={RegisterRecruiter} />

        </Switch>
      </BrowserRouter>
  );
}

export default App;
