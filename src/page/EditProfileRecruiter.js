import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

class EditProfileRecruiter extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>

        <div className="w-full h-72 bg-purple-700">
        </div>

        <div className="flex flex-row -mt-56 mx-32 mb-64 space-x-7">

        <div className="w-96">

            <div className="flex flex-col bg-white  rounded-md px-8 py-8">
              <img className="h-32 w-32 mx-auto " src="assets/building.png"></img>
              <h2 className="font-semibold text-lg text-gray-700 pb-2 pt-5">PT. Martabat Jaya Abadi</h2>
              <h2 className="text-sm text-gray-800 pb-3">Financial</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>Purwokerto, Jawa Tengah</h2>

            </div>

            <div className="my-8">
            <button className="bg-purple-700 text-white font-semibold py-3 hover:bg-purple-500  mb-4 w-full rounded-md ">Simpan</button>
            <button className="bg-white text-purple-700 font-semibold py-3 hover:bg-purple-200 border  border-purple-500   w-full rounded-md">Batal</button>
            </div>

            </div>

          <div className="w-full">

          <div className="flex flex-col bg-white rounded-md  divide-y px-8 py-8">
            <h2 className="font-semibold text-lg text-gray-700 pb-2 ">Data diri</h2>
            <label className="text-gray-500 text-sm pt-8" >Nama Perusahaan</label>
            <input className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan nama perusahan" />

            <label className="text-gray-500 text-sm pt-8" >Bidang</label>
            <input className=" border shadow  py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan bidang perusahaan ex : Financial" />

            <label className="text-gray-500 text-sm pt-8" >Kota</label>
            <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan kota" />

            <label className="text-gray-500 text-sm pt-8" >Deskripsi singkat</label>
            <input className=" border shadow  pb-32 pt-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Tuliskan deskripsi singkat" />

            <label className="text-gray-500 text-sm pt-8" >Email</label>
            <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan email" />

            <label className="text-gray-500 text-sm pt-8" >Instagram</label>
            <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan nama Instagram" />

            <label className="text-gray-500 text-sm pt-8" >Nomor Telepon</label>
            <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan nomor telepon" />

            <label className="text-gray-500 text-sm pt-8" >Linkedin</label>
            <input className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan nama Linkedin" />
          </div>

          </div>

        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default EditProfileRecruiter;
