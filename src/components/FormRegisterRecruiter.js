import React, { Component } from 'react';

class FormRegisterRecruiter extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="flex flex-col mt-24 mr-12">
                <h2 className="text-3xl font-semibold text-gray-800">Halo, Pewpeople</h2>
                <h2 className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et duirhoncus auctor.</h2>
                <div className="flex flex-col mt-10">
                <label className="text-sm text-gray-500">Nama Perusahaan</label>
                <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Nama Perusahaan"></input>
                <label className="text-sm text-gray-500 mt-8">Email</label>
                <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="email" placeholder="Masukan Email"></input>
                <label className="text-sm text-gray-500 mt-8">Jabatan</label>
                <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Jabatan"></input>
                <label className="text-sm text-gray-500 mt-8">No Handphone</label>
                <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan No Handphone"></input>
                <label className="text-sm text-gray-500 mt-8">Kata Sandi</label>
                <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="password" placeholder="Masukan Kata Sandi"></input>
                <label className="text-sm text-gray-500 mt-8">Konfirmasi kata Sandi</label>
                <input className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="password" placeholder="Masukan Konfirmasi kata Sandi"></input>

                <button type="submit" className="w-full bg-yellow-500 text-white font-semibold mt-10 py-3 rounded hover:bg-yellow-400">Daftar</button>
                <h2 className="text-center mt-6">Anda Sudah Punya Akun? <a href="" className="text-yellow-500 hover:text-yellow-600 ">Masuk Disini</a> </h2>
              </div>
              </div>
      </React.Fragment>
    );
  }
}

export default FormRegisterRecruiter;
