import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

class EditProfileTalent extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>

        <div className="w-full h-72 bg-purple-700">
        </div>

        <div className="flex flex-row -mt-56 mx-32 mb-64 space-x-7">

          <Profile/>

          <div className="w-full">

          <div className="flex flex-col bg-white rounded-md  divide-y px-8 py-8">
            <h2 className="font-semibold text-lg text-gray-700 pb-2 ">Louis Tomlinson</h2>
            <label className="text-gray-500 text-sm pt-8" >Nama lengkap</label>
            <input className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan Nama lengkap" />

            <label className="text-gray-500 text-sm pt-8" >Job desk</label>
            <input className=" border shadow  py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Job desk" />

            <label className="text-gray-500 text-sm pt-8" >Domisili</label>
            <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Domisili" />

            <label className="text-gray-500 text-sm pt-8" >Tempat kerja</label>
            <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Tempat kerja" />

            <label className="text-gray-500 text-sm pt-8" >Deskripsi singkat</label>
            <input className=" border shadow  pb-32 pt-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Tuliskan deskripsi singkat" />
          </div>

          <div className="flex flex-col bg-white rounded-md  divide-y mt-8 px-8 py-8 space-y-4">
            <div className="font-semibold text-lg text-gray-700  ">Skill</div>

            <div className="flex flex-row pt-8 space-x-8">
              <input className="border shadow w-full py-3 px-3 rounded text-gray-600  text-sm " type="text" placeholder="Masukan Nama lengkap" />
              <button className="py-4 w-28 font-bold hover:bg-yellow-400 bg-yellow-500 rounded text-white">Simpan</button>
            </div>
          </div >

          <div className="flex flex-col bg-white rounded-md   px-8 py-8 mt-8 divide-y space-y-2">
            <h2 className="font-semibold text-lg text-gray-700 pb-2 ">Pengalaman kerja</h2>

            <div>

                <div className="flex flex-col">
                <label className="text-gray-500 text-sm pt-8" >Posisi</label>
                <input className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="web developer" />
                </div>

                <div className="flex flex-row space-x-5">
                  <div className="flex flex-1 flex-col">
                  <label className="text-gray-500 text-sm pt-8" >Link repository</label>
                  <input className=" border shadow  py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan link repository" />
                  </div>

                  <div className="flex flex-1 flex-col w-full">
                  <label className=" text-gray-500 text-sm pt-8" >Tempat kerja</label>
                  <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Tempat kerja" />
                  </div>
                </div>

                <div className="flex flex-col mb-4 ">
                  <label className="text-gray-500 text-sm pt-8" >Deskripsi singkat</label>
                  <input className=" border shadow  pb-32 pt-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Deskripsikan pekerjaan anda" />
                </div>

            </div>

                <div className="pt-8">
                  <button className="bg-white text-yellow-500 font-semibold py-3 hover:bg-yellow-200 border  border-yellow-500 rounded-sm  w-full rounded-md">Tambah pengalaman kerja</button>
                </div>

          </div>

          <div className="flex flex-col bg-white rounded-md   px-8 py-8 mt-8 divide-y space-y-2">
            <h2 className="font-semibold text-lg text-gray-700 pb-2 ">Portofolio</h2>

            <div>

                <div className="flex flex-col">
                <label className="text-gray-500 text-sm pt-8" >Nama aplikasi</label>
                <input className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan nama aplikasi" />

                <label className="text-gray-500 text-sm pt-8" >Link repository</label>
                <input className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan link repository" />
                </div>

                <div className="text-gray-500 text-sm pt-8" >Type portofolio</div>
                <div className="flex flex-row space-x-5">
                  <div className="flex flex-1 flex-row border shadow rounded">
                    <input className=" border-2 my-auto mx-4" type="radio" />
                    <label className="my-auto text-gray-500 text-sm py-4" >Aplikasi mobile</label>
                  </div>

                  <div className="flex flex-1 flex-row  border shadow rounded">
                    <input className=" border-2 my-auto mx-4" type="radio" />
                    <label className="my-auto text-gray-500 text-sm py-4" >Aplikasi mobile</label>
                  </div>
                </div>

                <div className="flex flex-col mb-4 ">
                  <label className="text-gray-500 text-sm pt-8" >Upload gambar</label>
                  <div className=" border-4 border-dashed   py-20 text-center rounded text-gray-600 text-sm" >Drag & Drop untuk Upload Gambar Aplikasi Mobile</div>
                </div>

            </div>

                <div className="pt-8">
                  <button className="bg-white text-yellow-500 font-semibold py-3 hover:bg-yellow-200 border  border-yellow-500 rounded-sm  w-full rounded-md">Tambah portofolio</button>
                </div>

          </div>

          </div>

        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default EditProfileTalent;
