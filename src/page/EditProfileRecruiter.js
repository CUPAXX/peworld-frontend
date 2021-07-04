/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { profileRecruiterUpdate, profileRecruiter, updateRecruiterPicture } from '../redux/actions/recruiter'

import { connect } from 'react-redux'

class EditProfileRecruiter extends Component {
  state = {
    picture: null,
    Email: '',
    full_name: '',
    company: '',
    sector: '',
    phone_number: '',
    city: '',
    description: '',
    instagram: '',
    linkedin: ''
  }

  componentDidMount () {
    this.props.profileRecruiter(this.props.auth.userData.id)
  }

  data = (e) => {
    e.preventDefault()
    const { token } = this.props.auth
    const { full_name, Email, phone_number, company, sector, city, description, instagram, linkedin } = this.state
    const data = { full_name, Email, phone_number, company, sector, city, description, instagram, linkedin }
    this.props.profileRecruiterUpdate(data, token)

    // this.props.profileRecruiterUpdate({ full_name, Email, phone_number, company, sector, city, description, instagram, linkedin }, picture, token)
  }

  data2 = (e) => {
    e.preventDefault()
    const { token } = this.props.auth
    const { picture } = this.state

    this.props.updateRecruiterPicture({ picture }, token)
  }

  render () {
    const { data } = this.props?.recruiter
    // console.log(this.state)
    return (
      <React.Fragment>
        <Navbar/>

        <div className="w-full h-72 bg-purple-700">
        </div>

        <div className="flex flex-row -mt-56 mx-32 mb-64 space-x-7">

        <div className="w-96">

            <div className="flex flex-col bg-white  rounded-md px-8 py-8">
              <img className="h-32 w-32 mx-auto rounded-full" src={`http://localhost:8880/upload/${data.picture}`}></img>

              <input accept="image/*" id="icon-button-file" type="file" onChange={e => this.setState({ picture: e.target.files[0] })} className="absolute" style={{ display: 'none' }} />
              <label className="flex justify-center items-center" htmlFor="icon-button-file">
              <span className="font-semibold text-sm text-gray-500 pt-4"><i className="fa fa-pencil pr-2"></i>Edit</span>
              </label>
              <button className="bg-purple-700 text-white font-semibold py-3 hover:bg-purple-500" onClick={this.data2}>Save</button>

              <h2 className="font-semibold text-lg text-gray-700 py-2">{data.company}</h2>
              <h2 className="text-sm text-gray-800 pb-3">{data.sector}</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>{data.city}</h2>

            </div>

            <div className="my-8">
            <button onClick={this.data} className="bg-purple-700 text-white font-semibold py-3 hover:bg-purple-500  mb-4 w-full rounded-md ">Simpan</button>
            <button className="bg-white text-purple-700 font-semibold py-3 hover:bg-purple-200 border  border-purple-500   w-full rounded-md">Batal</button>
            </div>

            </div>

          <div className="w-full">

          <div className="flex flex-col bg-white rounded-md  divide-y px-8 py-8">
            <h2 className="font-semibold text-lg text-gray-700 pb-2 ">Data diri</h2>
            <label className="text-gray-500 text-sm pt-8" >Nama Perusahaan</label>
            <input onChange={e => this.setState({ company: e.target.value })} className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan nama perusahan" />

            <label className="text-gray-500 text-sm pt-8" >Nama Lengkap</label>
            <input onChange={e => this.setState({ full_name: e.target.value })} className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan nama lengkap" />

            <label className="text-gray-500 text-sm pt-8" >Bidang</label>
            <input onChange={e => this.setState({ sector: e.target.value })} className=" border shadow  py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan bidang perusahaan ex : Financial" />

            <label className="text-gray-500 text-sm pt-8" >Kota</label>
            <input onChange={e => this.setState({ city: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan kota" />

            <label className="text-gray-500 text-sm pt-8" >Deskripsi singkat</label>
            <input onChange={e => this.setState({ description: e.target.value })} className=" border shadow  pb-32 pt-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Tuliskan deskripsi singkat" />

            <label className="text-gray-500 text-sm pt-8" >Email</label>
            <input onChange={e => this.setState({ Email: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="email" placeholder="Masukan email" />

            <label className="text-gray-500 text-sm pt-8" >Instagram</label>
            <input onChange={e => this.setState({ instagram: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan nama Instagram" />

            <label className="text-gray-500 text-sm pt-8" >Nomor Telepon</label>
            <input onChange={e => this.setState({ phone_number: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan nomor telepon" />

            <label className="text-gray-500 text-sm pt-8" >Linkedin</label>
            <input onChange={e => this.setState({ linkedin: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan nama Linkedin" />
          </div>

          </div>

        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recruiter: state.recruiter,
  auth: state.auth
})

const mapDispatchToProps = { profileRecruiterUpdate, profileRecruiter, updateRecruiterPicture }

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileRecruiter);
