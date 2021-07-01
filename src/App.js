import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import RegisterTalent from './page/RegisterTalent'
import RegisterRecruiter from './page/RegisterRecruiter'
import ProfileRecruiter from './page/ProfileRecruiter'
import ProfileTalent from './page/ProfileTalent'
import Hire from './page/Hire'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RegisterTalent} />
          <Route path="/recruiter" component={RegisterRecruiter} />
          <Route path="/profile/recruiter" component={ProfileRecruiter} />
          <Route path="/profile/talent" component={ProfileTalent} />
          <Route path="/hire" component={Hire} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
