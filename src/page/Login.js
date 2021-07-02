import React, { Component } from 'react'
import ImgMix from '../components/ImgMix'
import Halo from '../components/Halo'
import ButtonLogin from '../components/ButtonLogin'
import '../App.css'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render () {
    return (
      <div className="login flex flex-row pt-12 pb-12 bg-gray-100">

      <ImgMix/>

          <div className="flex flex-col pl-12 pr-12">

              <Halo/>

              <form className="flex flex-col ">
              <label className="text-gray-500 text-sm" >Email </label>
              <input className="border border-gray-400 py-3 px-3 rounded text-gray-600 text-sm" type="email" placeholder="Masukan alamat email" />

              <label className="text-gray-500 text-sm pt-8" >Kata Sandi</label>
              <input className="border border-gray-400 py-3 px-3 rounded text-gray-600 text-sm" type="password" placeholder="Masukan kata sandi" />

              <Link to="/forgotPassword" className="pt-3 pb-6 text-right" >Lupa kata sandi?</Link>

              <ButtonLogin />
              </form>

              <div className="pt-6 text-center" >Anda belum punya akun? <Link to="/register" className="text-yellow-500"> Daftar disini </Link>
              </div>

          </div>

      </div>
    )
  }
}
