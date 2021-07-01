import React, { Component } from 'react';
import picProfile from '../bg/profile.png'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Portofolio from '../components/portofolio'
import Experience from '../components/Experience'

class ProfileTalent extends Component {
  render () {
    return (
      <React.Fragment>
        <section className="z-0">
          <div className="w-full h-72 bg-purple-700"></div>
          <div className="flex z-2 -mt-56 mx-32 mb-64">
            <div>
            <div className="flex flex-col bg-white  rounded-md mr-8 px-8 py-8">
              <img className="h-32 w-32 mx-auto " src={picProfile}></img>
              <h2 className="font-semibold text-lg text-gray-700 pb-2 pt-5">Louis Tomlinson</h2>
              <h2 className="text-sm text-gray-800 pb-3">Web Developer</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>Purwokerto, Jawa Tengah</h2>
              <h2 className="text-sm text-gray-500 pb-3">Freelancer</h2>
              <p className="w-72 text-sm text-gray-500 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
              <button className="bg-purple-700 text-white font-semibold py-3 rounded-sm mb-8">Hire</button>
              <h2 className="font-semibold text-lg pb-5">Skill</h2>
              <div className="flex flex-row space-x-3 pb-4">
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Python</button>
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Laravel</button>
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Golang</button>
              </div>
              <div className="flex flex-row space-x-3 pb-4">
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Javascript</button>
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">PHP</button>
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">HTML</button>
              </div>
              <div className="flex flex-row space-x-3 pb-4">
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">C++</button>
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Kotlin</button>
                <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Swift</button>
              </div>
              <h2 className="text-sm text-gray-500 pt-5 pb-3"><i className="fa fa-envelope-o text-base pr-3"></i>Louistommo@gmail.com</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-instagram text-lg pr-3"></i>@Louist91</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-github text-lg pr-3"></i>@Louistommo</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-gitlab text-base pr-3"></i>@Louistommo91</h2>

            </div>
            </div>

            <div>
            <div className="flex flex-1 flex-col bg-white rounded-md px-8 py-8">
              <div className="flex flex-row">
                <h2 className="font-semibold text-gray-500 text-lg mr-8 hover:text-gray-900 border-b-2 hover:border-purple-600">Portofolio</h2>
                <h2 className="font-semibold text-gray-500 text-lg hover:text-gray-900 border-b-2 hover:border-purple-600">Pengalaman kerja</h2>
              </div>

              {/* <Portofolio /> */}
              <Experience />

            </div>
            </div>

          </div>

        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProfileTalent;
