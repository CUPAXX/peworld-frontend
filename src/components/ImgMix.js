import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ImgMix extends Component {
  render () {
    return (
      <div className="bg-image flex ml-14 ">

        <div className="bg-coloring">
            <Link to="/"> <img className="w-15 h-5 mt-6 ml-6" src="/assets/logowhite.png" alt="logo"></img> </Link>
            <div className="bg-container ml-20 w-96 text-white text-4xl pt-48 leading-relaxed font-bold">Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </div>
        </div>

      </div>
    )
  }
}
