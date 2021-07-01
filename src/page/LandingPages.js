import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class LandingPages extends Component {
  render () {
    return (
      <div>
        <Navbar/>

        <div className="flex flex-row pt-24 pb-40">

          <div className="pl-36">
            <div className="font-semibold text-5xl leading-normal">Talenta terbaik negri untuk perubahan revolusi 4.0</div>
            <div className="text-lg text-gray-600 pb-14 pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>
            <div><button className="h-11 w-52 text-white rounded bg-purple-600 hover:bg-purple-400 font-bold text-sm">Mulai Dari Sekarang</button></div>
          </div>

          <img className="pr-40" src="assets/landing1.png" />

        </div>

        <div className="flex flex-row pb-40">

          <img className="pl-36 pr-16" src="assets/landing2.png" />

          <div className="pr-32">
            <div className="font-semibold text-4xl leading-normal">Kenapa harus mencari tallent di peworld</div>
            <h2 className="text-lg text-gray-600 pt-6"><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>
            <h2 className="text-lg text-gray-600 py-7"><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>
            <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>
            <h2 className="text-lg text-gray-600 py-7"><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>

          </div>

        </div>

        <div className="flex flex-row pb-40">

            <div className="pl-36 pr-9">
              <div className="font-semibold text-4xl leading-normal pb-8">Kenapa harus mencari tallent di peworld</div>

              <div className="grid grid-rows-4 grid-cols-2 gap-x-10 gap-y-8 ">

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Java</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Golang</h2>

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>PHP</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Ruby</h2>

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Kotlin</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>C++</h2>

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Javascript</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>10+ Bahasa lainnya</h2>

              </div>

            </div>

            <img className="pr-36" src="assets/landing1.png" />

        </div>

        <Footer/>

      </div>
    )
  }
}
