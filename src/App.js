import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import RegisterTalent from './page/RegisterTalent'
import RegisterRecruiter from './page/RegisterRecruiter'
import ProfileRecruiter from './page/ProfileRecruiter'
import ProfileTalent from './page/ProfileTalent'
import Hire from './page/Hire'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import LandingPages from './page/LandingPages'
import Login from './page/Login'
import PickerRegister from './page/PickerRegister'
import EditProfileTalent from './page/EditProfileTalent'
import EditProfileRecruiter from './page/EditProfileRecruiter'
import Home from './page/Home'
import ForgotPassword from './page/ForgotPassword'
import ConfirmPassword from './page/ConfirmPassword'
import PrivateRoute from './components/PrivateRoute'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPages} />
          <Route path="/register/talent" component={RegisterTalent} />
          <Route path="/register/recruiter" component={RegisterRecruiter} />
          {/* <Route path="/profile/recruiter" component={ProfileRecruiter} /> */}

          <Route path="/login" component={Login} />
          <Route path="/register" exact component={PickerRegister} />

          {/* <Route path="/editProfileTalent" component={EditProfileTalent} />
            <Route path="/editProfileRecruiter/:id" component={EditProfileRecruiter} /> */}
          {/* <Route path="/home" component={Home} /> */}
          {/* <Route path="/profile/talent/:id" component={ProfileTalent} /> */}
          {/* <Route path="/hire/:id" component={Hire} /> */}
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/forgotPassword/confirm" component={ConfirmPassword} />

          {/* <PrivateRoute path="/profile/recruiter">
            <ProfileRecruiter />
          </PrivateRoute>
          <PrivateRoute path="/profile/talent/:id">
            <ProfileTalent />
          </PrivateRoute>
          <PrivateRoute path="/editProfileTalent">
            <EditProfileTalent />
          </PrivateRoute>
          <PrivateRoute path="/editProfileRecruiter/:id">
            <EditProfileRecruiter />
          </PrivateRoute>
          <PrivateRoute path="/hire">
            <Hire />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute> */}

          <PrivateRoute>
            <Route path="/profile/recruiter" exact component={ProfileRecruiter} />
            <Route path="/profile/talent/:id" component={ProfileTalent} />
            <Route path="/editProfileTalent" component={EditProfileTalent} />
            <Route path="/editProfileRecruiter/:id" component={EditProfileRecruiter} />
            <Route path="/hire" component={Hire} />
            <Route path="/home" component={Home} />
          </PrivateRoute>

        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateProps = state => ({
  auth: state.auth
})

export default connect(mapStateProps)(App)
