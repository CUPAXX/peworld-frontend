import React, { Component } from 'react';
import ImageRegister from '../components/ImageRegister'
import FormRegisterTalent from '../components/FormRegisterTalent'

import { connect } from 'react-redux'
import { authRegisterTalent } from '../redux/actions/auth'

class RegisterTalent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    }
  }

  changeFullName = (e) => {
    this.setState({
      fullName: e.target.value
    })
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  changePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  changeConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }

  onRegister = (e) => {
    e.preventDefault()
    const data = {
      ...this.state
    }
    this.props.authRegisterTalent(data)
  }

  componentDidUpdate () {
    const { msg } = this.props.auth
    if (msg === 'success register talent!') {
      this.props.history.push('/login')
    }
  }

  render () {
    const { fullName, email, phoneNumber, password, confirmPassword } = this.state
    const { msg } = this.props.auth
    return (
      <React.Fragment>
        <section className="flex flex-row h-auto bg-gray-100">
          <ImageRegister />
          <FormRegisterTalent msg={msg} fullName={fullName} email={email} phoneNumber={phoneNumber} password={password} confirmPassword={confirmPassword} changeFullName={this.changeFullName} changeEmail={this.changeEmail} changePhoneNumber={this.changePhoneNumber} changePassword={this.changePassword} changeConfirmPassword={this.changeConfirmPassword} onRegister={this.onRegister}/>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  authRegisterTalent
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTalent)
