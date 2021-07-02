import React, { Component } from 'react'
import picProfile from '../bg/profile.png'

export default class Profile extends Component {
  render () {
    return (
      <div className="w-96">

      <div className="flex flex-col bg-white  rounded-md px-8 py-8">
        <img className="h-32 w-32 mx-auto " src={picProfile}></img>
        <h2 className="font-semibold text-lg text-gray-700 pb-2 pt-5">Louis Tomlinson</h2>
        <h2 className="text-sm text-gray-800 pb-3">Web Developer</h2>
        <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>Purwokerto, Jawa Tengah</h2>
        <h2 className="text-sm text-gray-500 pb-3">Freelancer</h2>

      </div>

      <div className="my-8">
      <button className="bg-purple-700 text-white font-semibold py-3 hover:bg-purple-500 rounded-sm mb-4 w-full rounded-md ">Simpan</button>
      <button className="bg-white text-purple-700 font-semibold py-3 hover:bg-purple-200 border  border-purple-500 rounded-sm  w-full rounded-md">Batal</button>
      </div>

      </div>
    )
  }
}