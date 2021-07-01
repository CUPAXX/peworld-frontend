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
<<<<<<< HEAD
import Home from './page/Home'
=======
import ForgotPassword from './page/ForgotPassword';
import ConfirmPassword from './page/ConfirmPassword'
>>>>>>> sandi2

function App () {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RegisterTalent} />
          <Route path="/recruiter" component={RegisterRecruiter} />
          <Route path="/profile/recruiter" component={ProfileRecruiter} />

          <Route path="/login" exact component={Login} />
          <Route path="/picker" component={PickerRegister} />
          <Route path="/landingPages" component={LandingPages} />
          <Route path="/EditProfileTalent" component={EditProfileTalent} />
          <Route path="/home" component={Home} />
          <Route path="/profile/talent" component={ProfileTalent} />
          <Route path="/hire" component={Hire} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/forgotPassword/confirm" component={ConfirmPassword} />

        </Switch>
      </BrowserRouter>
  );
}

export default App;
