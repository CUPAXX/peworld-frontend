import React, { Component } from 'react'
import ImgMix from '../components/ImgMix'
import Halo from '../components/Halo'
import ButtonLogin from '../components/ButtonLogin'
import '../App.css'

import { connect } from 'react-redux'
import { authLogin } from '../redux/actions/auth'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onLogin = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authLogin(email, password)
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render () {
    // console.log(this.props.auth)
    return (
      <div className="login flex flex-row pt-12 pb-12 bg-gray-100">

        <ImgMix />

        <div className="flex flex-col pl-12 pr-12">

          <Halo />

          <form onSubmit={this.onLogin} className="flex flex-col ">
            <label className="text-gray-500 text-sm" >Email </label>
            <input onChange={this.changeEmail} value={this.state.email} className="border border-gray-400 py-3 px-3 rounded text-gray-600 text-sm" type="email" placeholder="Masukan alamat email" />

            <label className="text-gray-500 text-sm pt-8" >Kata Sandi</label>
            <input onChange={this.changePassword} value={this.state.password} className="border border-gray-400 py-3 px-3 rounded text-gray-600 text-sm" type="password" placeholder="Masukan kata sandi" />

            <div className="pt-3 pb-6 text-right" >Lupa kata sandi?</div>

            <ButtonLogin />
          </form>

          <div className="pt-6 text-center" >Anda belum punya akun? <span className="text-yellow-500"> Daftar disini </span>
          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  authLogin
}

// export default Login

export default connect(mapStateToProps, mapDispatchToProps)(Login)
