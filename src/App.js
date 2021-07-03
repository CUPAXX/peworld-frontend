import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import RegisterTalent from './page/RegisterTalent'
import RegisterRecruiter from './page/RegisterRecruiter'
import ProfileRecruiter from './page/ProfileRecruiter'
import ProfileTalent from './page/ProfileTalent'
import Hire from './page/Hire'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPages from './page/LandingPages'
import Login from './page/Login'
import PickerRegister from './page/PickerRegister'
import EditProfileTalent from './page/EditProfileTalent';
import EditProfileRecruiter from './page/EditProfileRecruiter';

import Home from './page/Home'
import ForgotPassword from './page/ForgotPassword';
import ConfirmPassword from './page/ConfirmPassword'

function App () {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPages} />
          <Route path="/register/talent" component={RegisterTalent} />
          <Route path="/register/recruiter" component={RegisterRecruiter} />
          <Route path="/profile/recruiter" component={ProfileRecruiter} />

          <Route path="/login" component={Login} />
          <Route path="/register" exact component={PickerRegister} />

          <Route path="/editProfileTalent" component={EditProfileTalent} />
          <Route path="/editProfileRecruiter" component={EditProfileRecruiter} />
          <Route path="/home" component={Home} />
          <Route path="/profile/talent/:id" component={ProfileTalent} />
          <Route path="/hire/:id" component={Hire} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/forgotPassword/confirm" component={ConfirmPassword} />

        </Switch>
      </BrowserRouter>
  );
}

export default App;
