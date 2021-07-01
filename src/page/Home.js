import React, { Component } from 'react';
import picProfile from '../bg/profile.png'
import Navbar from '../components/Navbar'

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <section>
          <div className="bg-purple-700 ">
            <h2 className="text-white font-bold text-lg py-5 ml-28">Top Jobs</h2>
          </div>

          <div className="flex flex-col mx-28 my-10">

            <input className="text-sm py-5 text-gray-500 px-4 z-1 rounded-md" placeholder="Search for any skill"/>
            <i className="fa fa-search z-2 -mt-11 self-end mr-10 text-xl text-gray-600"></i>
            {/* <select className="py-5 px-4 text-gray-500 bg-white text-sm z-2 relative w-32 self-end border-l-2 border-gray-500 mr-10" style={{ margin: '-60px' }}>
                <option value="Project">Project</option>
                <option value="Employee">Employee</option>
            </select>
            <button className="bg-purple-700 relative z-3 w-32 py-3 text-white rounded-md mt-1 self-end">Search</button> */}

            <div className="flex flex-col bg-white mt-14">

              <div className="flex flex-row items-center border-b-2 py-5">
                <div className="mx-5 mb-3">
                  <img className="w-28 h-28" src={picProfile}></img>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="font-semibold text-2xl">Louis Tomlinson</h2>
                  <h2 className="text-gray-500 pt-2">Web developer</h2>
                  <h2 className="text-gray-500 pt-1"><i className="fa fa-map-marker pr-2 text-2xl"></i>Lorem ipsum</h2>
                  <div className="flex flex-row space-x-3 pt-4 pb-5">
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Python</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Laravel</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Golang</button>
                  </div>
                </div>
                <div className="flex">
                  <button className="text-white bg-purple-700 py-3 px-6 rounded-sm mr-16">Lihat Profile</button>
                </div>
              </div>

              <div className="flex flex-row items-center border-b-2 py-5">
                <div className="mx-5 mb-3">
                  <img className="w-28 h-28" src={picProfile}></img>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="font-semibold text-2xl">Louis Tomlinson</h2>
                  <h2 className="text-gray-500 pt-2">Web developer</h2>
                  <h2 className="text-gray-500 pt-1"><i className="fa fa-map-marker pr-2 text-2xl"></i>Lorem ipsum</h2>
                  <div className="flex flex-row space-x-3 pt-4 pb-5">
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Python</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Laravel</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Golang</button>
                  </div>
                </div>
                <div className="flex">
                  <button className="text-white bg-purple-700 py-3 px-6 rounded-sm mr-16">Lihat Profile</button>
                </div>
              </div>

              <div className="flex flex-row items-center border-b-2 py-5">
                <div className="mx-5 mb-3">
                  <img className="w-28 h-28" src={picProfile}></img>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="font-semibold text-2xl">Louis Tomlinson</h2>
                  <h2 className="text-gray-500 pt-2">Web developer</h2>
                  <h2 className="text-gray-500 pt-1"><i className="fa fa-map-marker pr-2 text-2xl"></i>Lorem ipsum</h2>
                  <div className="flex flex-row space-x-3 pt-4 pb-5">
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Python</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Laravel</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Golang</button>
                  </div>
                </div>
                <div className="flex">
                  <button className="text-white bg-purple-700 py-3 px-6 rounded-sm mr-16">Lihat Profile</button>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-row justify-center mb-16 space-x-3">
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-left text-3xl font-medium text-gray-400"></i></div>
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400">1</div>
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400">2</div>
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400">3</div>
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400">4</div>
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400">5</div>
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400">6</div>
            <div className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-right text-3xl font-medium text-gray-400"></i></div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
