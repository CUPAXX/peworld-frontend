import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class LandingPages extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <div className="bg-white">
        <div className="flex flex-row pt-24 pb-40">

          <div className="pl-36 pr-24">
            <div className="font-semibold text-4xl leading-normal">Talenta terbaik negri untuk perubahan revolusi 4.0</div>
            <div className="text-lg text-gray-600 pb-14 pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>
            <div><button className="h-11 w-52 text-white rounded bg-purple-600 hover:bg-purple-400 font-bold text-sm">Mulai Dari Sekarang</button></div>
          </div>

          <img className="pr-40" src="assets/landing1.png" />

        </div>

        <div className="flex flex-row pb-40">

          <img className="pl-36 pr-16" src="assets/landing2.png" />

          <div className="pr-32">
            <div className="font-semibold text-3xl leading-normal">Kenapa harus mencari tallent di peworld</div>
            <h2 className="text-lg text-gray-600 pt-6"><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>
            <h2 className="text-lg text-gray-600 py-7"><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>
            <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>
            <h2 className="text-lg text-gray-600 py-7"><i className="fa fa-lg pr-5 fa-check-circle text-purple-700 "></i>Lorem ipsum dolor sit amet.</h2>

          </div>

        </div>

        <div className="flex flex-row pb-40">

            <div className="pl-36 pr-9">
              <div className="font-semibold text-3xl leading-normal pb-8">Kenapa harus mencari tallent di peworld</div>

              <div className="grid grid-rows-4 grid-cols-2 gap-x-10 gap-y-8 ">

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>Java</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>Golang</h2>

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>PHP</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>Ruby</h2>

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>Kotlin</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>C++</h2>

                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>Javascript</h2>
                  <h2 className="text-lg text-gray-600 "><i className="fa fa-lg pr-5 fa-check-circle text-yellow-400 "></i>10+ Bahasa lainnya</h2>

              </div>

            </div>

            <img className="pr-36" src="assets/landing3.png" />

        </div>

        <div className="bg-gray-100">
          <div className="text-center pt-20 pb-14 font-semibold text-4xl">Their opinion about peworld</div>

          <div className="flex flex-row pl-44 pr-44 space-x-7 pb-56">

          <div className="absolute pt-40"><i className="fa fa-3x fa-chevron-circle-left text-purple-700"></i></div>

            <div className="text-center  bg-white flex-1 shadow-lg">
              <img className="ml-auto mr-auto pt-9 pb-4" src="assets/people1.png" />
              <div className="font-semibold text-3xl pb-2">Harry Styles</div>
              <div className="text-gray-600 pb-3">Web Developer</div>
              <div className="text-lg px-14 pb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>
            </div>

            <div className="text-center  bg-white flex-1 shadow-lg">
              <img className="ml-auto mr-auto pt-9 pb-4" src="assets/people2.png" />
              <div className="font-semibold text-3xl pb-2">Niall Horan</div>
              <div className="text-gray-600 pb-3">Web Developer</div>
              <div className="text-lg px-14 pb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
            </div>

            <div className="text-center  bg-white flex-1 shadow-lg">
              <img className="ml-auto mr-auto pt-9 pb-4" src="assets/people3.png" />
              <div className="font-semibold text-3xl pb-2">Louis Tomlinson</div>
              <div className="text-gray-600 pb-3">Web Developer</div>
              <div className="text-lg px-14 pb-9">Lorem ipsum dolor sit amet, consectetur </div>
            </div>

            <div className="absolute pt-40 right-40 "><i className="fa fa-3x fa-chevron-circle-right  text-purple-700"></i></div>

          </div>

          <div className="flex flex-row justify-between bg-purple-700 px-36 h-56 mb-28 mx-36 rounded-tl-3xl rounded-br-3xl">
            <div className="text-white font-semibold text-4xl my-auto w-72 leading-relaxed">Lorem ipsum dolor sit amet</div>
            <button className="bg-white text-purple-700 h-16 w-52 item-center my-auto rounded-md hover:bg-purple-200">Mulai Dari Sekarang</button>
          </div>

        </div>

        </div>
      <Footer/>

      </div>
    )
  }
}
