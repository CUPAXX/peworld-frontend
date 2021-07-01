import React, { Component } from 'react';
import picProfile from '../bg/profile.png'
import Footer from '../components/Footer'

class ProfileRecruiter extends Component {
  render () {
    return (
      <React.Fragment>
        <section className="flex w-full h-full bg-gray-100 justify-center">
          <div className="flex flex-1 flex-col mt-10 mb-40 mx-20 bg-white">
            <div className="bg-purple-700 h-40 w-full rounded-t-xl">
              <h2 className="text-white text-right pr-5 text-sm mt-32"><i className="fa fa-pencil text-sm"></i> Ubah Latar</h2>
            </div>
            <div className=" flex flex-col items-center mx-auto z-2 -mt-12 mb-40">
              <div className="flex flex-col justify-center items-center">
                <img className="h-24 w-24 mx-auto" src={picProfile}></img>
                <h2 className="pt-6 font-semibold text-gray-800 text-center">PT. Martabat Jaya Abadi</h2>
                <h2 className="text-sm py-2 text-gray-700 text-center">Financial</h2>
                <h2 className="text-sm text-gray-500 pb-5 text-center"><i className="fa fa-map-marker pr-2 text-lg"></i>Purwokerto, Jawa Tengah</h2>
                <p className="text-sm text-gray-500 mb-5 text-center" style={{ width: '550px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
              </div>

              <div className="flex flex-col w-72 items-center">
                <button className=" py-3 bg-purple-700 px-20 text-white font-semibold rounded mb-8">Edit Profile</button>
                <div className="flex flex-col space-y-3">
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-envelope-o pr-4 text-lg"></i>martabatjaya@gmail.com</h2>
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-instagram pr-4 text-lg"></i>martabat_jaya</h2>
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-phone pr-4 text-lg"></i>0821-8190-1821</h2>
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-linkedin pr-4 text-lg"></i>Martabat Jaya Abadi</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProfileRecruiter;
