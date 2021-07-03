import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FormRegisterRecruiter extends Component {
  render () {
    const { msg, fullName, email, phoneNumber, password, confirmPassword, company, sector, changeFullName, changeEmail, changePhoneNumber, changePassword, changeConfirmPassword, changeCompany, changeSector, onRegister } = this.props
    return (
      <React.Fragment>
        <div className="flex flex-col my-24 mr-12">
          <h2 className="text-3xl font-semibold text-gray-800">Halo, Pewpeople</h2>
          <h2 className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et duirhoncus auctor.</h2>
          {msg !== ''
            ? msg !== 'success register recruiter!' && <div className='bg-red-300 text-red-600 font-bold w-full mt-5 px-2 py-5'>{msg}</div>
            : <></>
          }
          <form onSubmit={onRegister} className="flex flex-col mt-10">
            <label className="text-sm text-gray-500">Nama Lengkap</label>
            <input value={fullName} onChange={changeFullName} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Nama Lengkap"></input>
            <label className="text-sm text-gray-500 mt-8">Nama Perusahaan</label>
            <input value={company} onChange={changeCompany} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Nama Perusahaan"></input>
            <label className="text-sm text-gray-500 mt-8">Email</label>
            <input value={email} onChange={changeEmail} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="email" placeholder="Masukan Email"></input>
            <label className="text-sm text-gray-500 mt-8">Bidang</label>
            <input value={sector} onChange={changeSector} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Bidang"></input>
            <label className="text-sm text-gray-500 mt-8">No Handphone</label>
            <input value={phoneNumber} onChange={changePhoneNumber} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan No Handphone"></input>
            <label className="text-sm text-gray-500 mt-8">Kata Sandi</label>
            <input value={password} onChange={changePassword} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="password" placeholder="Masukan Kata Sandi"></input>
            <label className="text-sm text-gray-500 mt-8">Konfirmasi kata Sandi</label>
            <input value={confirmPassword} onChange={changeConfirmPassword} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="password" placeholder="Masukan Konfirmasi kata Sandi"></input>

            <button type="submit" className="w-full bg-yellow-500 text-white font-semibold mt-10 py-3 rounded hover:bg-yellow-400">Daftar</button>
            <h2 className="text-center mt-6">Anda Sudah Punya Akun? <Link to='/login' className="text-yellow-500 hover:text-yellow-600 ">Masuk Disini</Link> </h2>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormRegisterRecruiter;
