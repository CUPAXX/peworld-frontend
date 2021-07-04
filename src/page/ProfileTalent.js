import React, { Component } from 'react';
import picProfile from '../bg/profile.png'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Portofolio from '../components/portofolio'
import Experience from '../components/Experience'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux';
import { getTalentProfile } from '../redux/actions/profileTalent'
import { getSkill } from '../redux/actions/skills';
import { getExperience } from '../redux/actions/getExperience'
import { getPortofolio } from '../redux/actions/getPortofolio';
const { REACT_APP_BASE_URL: URL } = process.env
class ProfileTalent extends Component {
  state ={
    switch: 0,
    loading: true
  }

  portoSwitch=() => {
    this.setState({ switch: 0 })
  }

  experienceSwitch=() => {
    this.setState({ switch: 1 })
  }

  componentDidMount () {
    this.props.getTalentProfile(this.props.match.params.id)
    this.props.getExperience(this.props.match.params.id)
    this.props.getPortofolio(this.props.match.params.id)
    this.props.getSkill(this.props.match.params.id)
      .then(() => {
        this.setState({ loading: false })
      })
  }

  render () {
    const data = this.props.talentProfile.talentProfile
    return (
      <React.Fragment>
        <Navbar/>
        <section className="z-0">
          <div className="w-full h-72 bg-purple-700"></div>
          <div className="flex z-2 -mt-56 mx-32 mb-64">
            <div>
            <div className="flex flex-col bg-white  rounded-md mr-8 px-8 py-8">
              <img className="h-32 w-32 mx-auto rounded-full" src={`${URL}/upload/${data.picture}`}></img>
              <h2 className="font-semibold text-lg text-gray-700 pb-2 pt-5">{data.full_name}</h2>
              <h2 className="text-sm text-gray-800 pb-3">{data.job_desk}</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>{data.address}</h2>
              <h2 className="text-sm text-gray-500 pb-3">{data.job_type}</h2>
              <p className="w-72 text-sm text-gray-500 pb-8">{data.description}</p>
              { this.props.auth.userData.role === 'talent'
                ? <></>
                : <Link to={`/hire/${this.props.match.params.id}`}><button className="bg-purple-700 text-white font-semibold py-3 w-full rounded-sm mb-8">Hire</button></Link>
              }
              { this.props.auth.userData.id === parseInt(this.props.match.params.id)
                ? <Link to={'/editProfileTalent/'}><button className="bg-purple-700 text-white font-semibold py-3 w-full rounded-sm mb-8">Edit Profile</button></Link>
                : <></>
              }
              <h2 className="font-semibold text-lg pb-5">Skill</h2>
              <div className="grid grid-cols-3 gap-y-2 gap-x-2">
              { this.state.loading === false
                ? this.props.skills.skills.map((item, idx) => (
                <button key={idx} className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">{item}</button>
                ))
                : <></>
              }
              </div>
              <div className="flex flex-row space-x-3 pb-4">

              </div>
              <div className="flex flex-row space-x-3 pb-4">

              </div>
              <h2 className="text-sm text-gray-500 pt-5 pb-3"><i className="fa fa-envelope-o text-base pr-3"></i>{data.email}</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-phone text-lg pr-3"></i>{data.phone_number}</h2>

            </div>
            </div>

            <div>
            <div className="flex flex-1 flex-col bg-white rounded-md px-8 py-8">
              <div className="flex flex-row">
                <button onClick={this.portoSwitch} className="font-semibold text-gray-500 text-lg mr-8 hover:text-gray-900 border-b-2 hover:border-purple-600">Portofolio</button>
                <button onClick={this.experienceSwitch} className="font-semibold text-gray-500 text-lg hover:text-gray-900 border-b-2 hover:border-purple-600">Pengalaman kerja</button>
              </div>
              {this.state.switch === 0
                ? <>{ this.state.loading === false
                  ? <Portofolio data={this.props.portofolio}/>
                  : <></>
                }
              </>
                : <>
              <Experience data={this.props.experience}/>
              </>
              }

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
  auth: state.auth,
  talentProfile: state.talentProfile,
  skills: state.skills,
  experience: state.experience,
  portofolio: state.portofolio
})
const mapDispatchToProps = { getTalentProfile, getSkill, getExperience, getPortofolio }
export default connect(mapStateToProps, mapDispatchToProps)(ProfileTalent)
