import React, { Component } from 'react';
import logo from '../bg/logowhite.png'

class Footer extends Component {
  render () {
    return (
      <React.Fragment>
        <footer className="bg-purple-700 w-full h-72">
          <div className="flex flex-col mx-28 pt-12 border-b">
            <img className="w-28 h-8" src={logo}></img>
            <h2 className="text-white w-72 text-sm mt-6 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h2>
          </div>
          <div className="flex flex-row mx-28 justify-between mt-6">
            <h2 className="text-white flex-1 ">2020 Pewworld. All right reserved</h2>
            <h2 className=" text-white mr-16 ">Telepon</h2>
            <h2 className="text-white flex justify-end">Email</h2>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
