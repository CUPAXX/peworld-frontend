import React, { Component } from 'react';
import picProfile from '../bg/profile.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

class Hire extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <section>
        <div className="flex mt-14 mx-32 mb-64">
            <div>
            <div className="flex flex-col bg-white  rounded-md mr-8 px-8 py-8">
              <img className="h-32 w-32 mx-auto " src={picProfile}></img>
              <h2 className="font-semibold text-lg text-gray-700 pb-2 pt-5">Louis Tomlinson</h2>
              <h2 className="text-sm text-gray-800 pb-3">Web Developer</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>Purwokerto, Jawa Tengah</h2>
              <h2 className="text-sm text-gray-500 pb-3">Freelancer</h2>
              <p className="w-72 text-sm text-gray-500 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
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

            </div>
            </div>

            <div className="flex flex-col mx-5" style={{ width: '500px' }}>
              <h2 className="text-3xl font-semibold">Hubungi Lous Tomlinson</h2>
              <h2 className="text-gray-600 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h2>
              <label className="text-sm text-gray-500 mt-8">Tujuan tentang pesan ini</label>
              <select className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Nama Perusahaan">
                <option value="Project">Project</option>
                <option value="Employee">Employee</option>
              </select>
              <label className="text-sm text-gray-500 mt-8">Nama lengkap</label>
              <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Nama lengkap"></input>
              <label className="text-sm text-gray-500 mt-8">Email</label>
              <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="Email" placeholder="Masukan Email"></input>
              <label className="text-sm text-gray-500 mt-8">No Handpone</label>
              <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan No Handpone"></input>
              <label className="text-sm text-gray-500 mt-8">Deskripsi</label>
              <textarea className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Deskripsi" rows="10"></textarea>
              <button type="submit" className="w-full bg-yellow-500 text-white font-semibold mt-10 py-3 rounded hover:bg-yellow-400">Hire</button>
            </div>

          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Hire;
