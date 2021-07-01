import React, { Component } from 'react'
import ImgMix from '../components/ImgMix'

export default class PickerRegister extends Component {
  render () {
    return (
      <div className="login flex flex-row pt-12 pb-12 bg-gray-100">

      <ImgMix/>

      <div className="flex flex-col pl-12 pr-12">

      <div>
          <div className="text-3xl pt-12 font-semibold pb-4 text-center mt-10">Register As</div>
          <div className="font-normal pb-8 text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>

          <button className="bg-yellow-500 text-white text-base font-bold w-full rounded py-3 mb-8 hover:bg-yellow-400">Register as Talent</button>

          <button className="bg-yellow-500 text-white text-base font-bold w-full rounded py-3 hover:bg-yellow-400">Register as Recruiter</button>

          <div className="pt-6 text-center" >Anda sudah punya akun? <span className="text-yellow-500"> Login disini </span>
          </div>
      </div>

      </div>

      </div>
    )
  }
}
