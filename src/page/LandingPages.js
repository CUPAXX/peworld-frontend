import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class LandingPages extends Component {
  render () {
    return (
      <div>
        <Navbar/>

        <div className="flex flex-row pt-24">

          <div className="pl-36">
            <div className="font-semibold text-5xl leading-normal">Talenta terbaik negri untuk perubahan revolusi 4.0</div>
            <div className="text-lg text-gray-600 pb-14 pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>
            <div><button className="h-11 w-52 text-white rounded bg-purple-600 hover:bg-purple-400 font-bold text-sm">Mulai Dari Sekarang</button></div>
          </div>

          <img className="pr-40" src="assets/landing1.png" />
        </div>

        <Footer/>

      </div>
    )
  }
}
