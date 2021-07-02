import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render () {
    return (
      <nav className="bg-white">
            <div className="flex flex-row mx-28 py-6 justify-between">

            <div className="flex flex-row space-x-24 font-semibold">
              <Link to="/"><img className="" src="/assets/logo2.png" alt="logo"></img></Link>
              <Link to="/home" className="mt-auto mb-auto hover:text-gray-600">Home</Link>
            </div>

            <div className="space-x-4">
                <Link to="/login"><button className="h-11 w-24 border rounded-md border-purple-600 hover:bg-purple-200 text-purple-600 font-bold text-sm">Masuk</button></Link>
               <Link to="/register"><button className="h-11 w-24 text-white rounded-md bg-purple-600 hover:bg-purple-400 font-bold text-sm">Daftar</button></Link>
            </div>

            </div>
      </nav>
    )
  }
}
