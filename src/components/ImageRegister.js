import React, { Component } from 'react';
import logo from '../bg/logowhite.png'
import { Link } from 'react-router-dom'

class ImageRegister extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="registerBg flex mr-14 ml-12 mt-12 mb-12 ">
            <div className="bg-opacity">
              <Link to="/"> <img className="w-15 h-5 ml-10 mt-8" src={logo}></img> </Link>
              <h2 className="text-white font-bold text-4xl w-96 ml-20 mt-48 leading-relaxed">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h2>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ImageRegister;
