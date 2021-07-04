import React, { Component } from 'react';
import picProfile from '../bg/profile.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { profileRecruiter } from '../redux/actions/recruiter'

class ProfileRecruiter extends Component {
  componentDidMount () {
    this.props.profileRecruiter(this.props.auth.userData.id)
  }

  render () {
    // console.log(this.props)
    const { data } = this.props.recruiter
    console.log(data)
    return (
      <React.Fragment>
        <Navbar/>
        <section className="flex w-full h-full bg-gray-100 justify-center">
          <div className="flex flex-1 flex-col mt-10 mb-40 mx-20 bg-white">
            <div className="bg-purple-700 h-40 w-full rounded-t-xl">
            </div>
            <div className=" flex flex-col items-center mx-auto z-2 -mt-12 mb-40">
                  <div className="flex flex-col justify-center items-center">
                  <img className="h-24 w-24 mx-auto rounded-full" src={`http://localhost:8880/upload/${data.picture}`}></img>
                  <h2 className="pt-6 font-semibold text-gray-800 text-center">{data.company}</h2>
                  <h2 className="text-sm py-2 text-gray-700 text-center">{data.sector}</h2>
                  <h2 className="text-sm text-gray-500 pb-5 text-center"><i className="fa fa-map-marker pr-2 text-lg"></i>{data.city}</h2>
                  <p className="text-sm text-gray-500 mb-5 text-center" style={{ width: '550px' }}>{data.user_description}</p>
                </div>

              <div className="flex flex-col w-72 items-center">
                <Link to={`/editProfileRecruiter/${data.id}`} ><button className=" py-3 bg-purple-700 px-20 text-white font-semibold rounded mb-8">Edit Profile</button></Link>
                <div className="flex flex-col space-y-3">
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-envelope-o pr-4 text-lg"></i>{data.Email}</h2>
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-instagram pr-4 text-lg"></i>{data.user_instagram}</h2>
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-phone pr-4 text-lg"></i>{data.phone_number}</h2>
                  <h2 className="text-sm text-gray-500 "><i className="fa fa-linkedin pr-4 text-lg"></i>{data.user_linkedin}</h2>
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

const mapStateToProps = state => ({
  recruiter: state.recruiter,
  auth: state.auth
})

const mapDispatchToProps = {
  profileRecruiter
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileRecruiter)
