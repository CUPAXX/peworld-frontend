import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import RegisterTalent from './page/RegisterTalent'
import RegisterRecruiter from './page/RegisterRecruiter'
import ProfileRecruiter from './page/ProfileRecruiter'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RegisterTalent} />
          <Route path="/recruiter" component={RegisterRecruiter} />
          <Route path="/profile/recruiter" component={ProfileRecruiter} />

        </Switch>
      </BrowserRouter>
  );
}

export default App;
