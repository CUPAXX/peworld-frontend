import React, { Component } from 'react';
import ImageRegister from '../components/ImageRegister'
import FormRegisterRecruiter from '../components/FormRegisterRecruiter'

import { connect } from 'react-redux'
import { authRegisterRecruiter } from '../redux/actions/auth'

class RegisterRecruiter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      company: '',
      sector: ''
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

  changeCompany = (e) => {
    this.setState({
      company: e.target.value
    })
  }

  changeSector = (e) => {
    this.setState({
      sector: e.target.value
    })
  }

  onRegister = (e) => {
    e.preventDefault()
    const data = {
      ...this.state
    }
    this.props.authRegisterRecruiter(data)
  }

  componentDidUpdate () {
    const { msg } = this.props.auth
    if (msg === 'success register recruiter!') {
      this.props.history.push('/login')
    }
  }

  render () {
    const { fullName, email, phoneNumber, password, confirmPassword, company, sector } = this.state
    const { msg } = this.props.auth
    return (
      <React.Fragment>
        <section className="flex flex-row  bg-gray-100">

          <ImageRegister />
          <FormRegisterRecruiter msg={msg} fullName={fullName} email={email} phoneNumber={phoneNumber} password={password} confirmPassword={confirmPassword} company={company} sector={sector} changeFullName={this.changeFullName} changeEmail={this.changeEmail} changePhoneNumber={this.changePhoneNumber} changePassword={this.changePassword} changeConfirmPassword={this.changeConfirmPassword} changeCompany={this.changeCompany} changeSector={this.changeSector} onRegister={this.onRegister}/>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  authRegisterRecruiter
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRecruiter)
