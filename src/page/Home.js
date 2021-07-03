import React, { useEffect } from 'react';
import picProfile from '../bg/profile.png'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getTalent } from './../redux/actions/talent';

const Home = (props) => {
  useEffect(() => {
    getTalent()
  }, [])

  console.log(props)

  return (
      <React.Fragment>
        <Navbar />
        <section>
          <div className="bg-purple-700 ">
            <h2 className="text-white font-bold text-lg py-5 ml-28">Top Jobs</h2>
          </div>

          <div className="flex flex-col mx-28 my-10">

            <div className=" flex flex-row items-center bg-white px-2">
              <div className="w-full">
              <input className="text-sm py-5 text-gray-500 w-full px-4 z-1 rounded-md" placeholder="Search for any skill"/>
              </div>

              <div>
              <i className="fa fa-search z-2 self-end mr-10 text-xl text-gray-600"></i>
              </div>
              <div>
                <select className="border-l-2 border-gray-500 mr-10 py-3 px-4 text-gray-500 bg-white text-sm">
                  <option value="Sort">Sort</option>
                  <option value="Sort By Name">Select By Name</option>
                </select>
              </div>
              <div className="flex items-center">
              <button className="bg-purple-700 relative z-3 w-32 py-3 text-white rounded-md  self-end">Search</button>
              </div>
            </div>

            <div className="flex flex-col bg-white mt-14">

              <div className="flex flex-row items-center border-b-2 py-5">
                <div className="mx-5 mb-3">
                  <img className="w-28 h-28" src={picProfile}></img>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="font-semibold text-2xl">Louis Tomlinson</h2>
                  <h2 className="text-gray-500 pt-2">Web developer</h2>
                  <h2 className="text-gray-500 pt-1"><i className="fa fa-map-marker pr-2 text-2xl"></i>Lorem ipsum</h2>
                  <div className="flex flex-row space-x-3 pt-4 pb-5">
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Python</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Laravel</button>
                    <button className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">Golang</button>
                  </div>
                </div>
                <div className="flex">
                  <Link to="/profile/talent"><button className="text-white bg-purple-700 py-3 px-6 rounded-sm mr-16">Lihat Profile</button></Link>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-row justify-center mb-16 space-x-3">
            <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-left text-3xl font-medium text-gray-400"></i></button>
            <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400">1</button>
            <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-right text-3xl font-medium text-gray-400"></i></button>
          </div>
        </section>
      </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  talent: state.talent
});

const mapDispatchToProps = { getTalent }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
