import React, { Component } from 'react'
import ImgMix from '../components/ImgMix'

export default class ForgotPassword extends Component {
  render () {
    return (
      <div className="login flex flex-row pt-12 pb-12 bg-gray-100">

      <ImgMix />

        <div className="flex flex-col pl-12 pr-12 w-1/2">
          <div className="text-3xl pt-12 font-semibold pb-4 mt-10">Reset password</div>
          <div className="font-normal pb-14 text-gray-600 ">You need to change your password to activate your account</div>

          <label className="text-gray-500 text-sm " >Email</label>
          <input className="border border-gray-400 py-3 px-3 rounded text-gray-600 text-sm mb-8" type="password" placeholder="Masukan alamat email" />

          <label className="text-gray-500 text-sm " >Email</label>
          <input className="border border-gray-400 py-3 px-3 rounded text-gray-600 text-sm mb-14" type="password" placeholder="Masukan alamat email" />

          <button className="bg-yellow-500 text-white text-base font-bold w-full rounded py-3 hover:bg-yellow-400">Reset password</button>
        </div>

      </div>
    )
  }
}
