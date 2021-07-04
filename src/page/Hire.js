import React, { Component } from 'react';
import picProfile from '../bg/profile.png'
import Swal from 'sweetalert2'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { getTalentProfile } from '../redux/actions/profileTalent'
import { getSkill } from '../redux/actions/skills';
import { connect } from 'react-redux';
import { CreateHire } from '../redux/actions/hire'
const { REACT_APP_BASE_URL: URL } = process.env

class Hire extends Component {
  constructor (props) {
    super(props)
    this.state = {
      idMessage: 0,
      companyName: '',
      email: '',
      phoneNumber: '',
      description: ''
    }
  }

  // changeCompanyName = (e) => {
  //   this.setState({
  //     companyName: e.target.value
  //   })
  // }

  // changeEmail = (e) => {
  //   this.setState({
  //     email: e.target.value
  //   })
  // }

  // changePhoneNumber = (e) => {
  //   this.setState({
  //     phoneNumber: e.target.value
  //   })
  // }

  // changeDescription = (e) => {
  //   this.setState({
  //     description: e.target.value
  //   })
  // }

  onHire = (e) => {
    e.preventDefault()
    const { token } = this.props.auth
    const id = this.props.match.params.id
    const { idMessage, companyName, email, phoneNumber, description } = this.state
    console.log(idMessage);
    const data = { idMessage, companyName, email, phoneNumber, description }
    this.props.CreateHire(data, token, id)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success hire talent',
          showConfirmButton: false,
          timer: 2000,
          iconColor: '#7F3FBF'
        });
      })
  }

  state ={
    loading: true
  }

  componentDidMount () {
    this.props.getTalentProfile(this.props.match.params.id)
    this.props.getSkill(this.props.match.params.id)
      .then(() => {
        this.setState({ loading: false })
      })
  }

  componentDidUpdate () {

  }

  render () {
    const data = this.props.talentProfile.talentProfile
    return (
      <React.Fragment>
        <Navbar history={this.props.history}/>
        <section>
        <div className="flex mt-14 mx-32 mb-64">
            <div>
            <div className="flex flex-col bg-white  rounded-md mr-8 px-8 py-8">
            <img className="h-32 w-32 mx-auto " src={`${URL}/upload/${data.picture}`}></img>
              <h2 className="font-semibold text-lg text-gray-700 pb-2 pt-5">{data.full_name}</h2>
              <h2 className="text-sm text-gray-800 pb-3">{data.job_desk}</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>{data.address}</h2>
              <h2 className="text-sm text-gray-500 pb-3">{data.job_type}</h2>
              <p className="w-72 text-sm text-gray-500 pb-8">{data.description}</p>

              <h2 className="font-semibold text-lg pb-5">Skill</h2>
              <div className="grid grid-cols-3 gap-y-2 gap-x-2">
              { this.state.loading === false
                ? this.props.skills.skills.map((item, idx) => (
                <button key={idx} className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">{item}</button>
                ))
                : <></>
              }
              </div>

            </div>
            </div>

            <form onSubmit={this.onHire}>
            <div className="flex flex-col mx-5" style={{ width: '500px' }}>
              <h2 className="text-3xl font-semibold">Hubungi Lous Tomlinson</h2>
              <h2 className="text-gray-600 my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</h2>

              <label className="text-sm text-gray-500 mt-8">Tujuan tentang pesan ini</label>
              <select value={this.state.idMessage} onChange={e => this.setState({ idMessage: e.target.value })} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Nama Perusahaan">
                <option value="1" >Project</option>
                <option value="2">Employee</option>
              </select>
              <label className="text-sm text-gray-500 mt-8">Nama lengkap</label>
              <input onChange={e => this.setState({ companyName: e.target.value })} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Nama lengkap"></input>
              <label className="text-sm text-gray-500 mt-8">Email</label>
              <input onChange={e => this.setState({ email: e.target.value })} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="Email" placeholder="Masukan Email"></input>
              <label className="text-sm text-gray-500 mt-8">No Handpone</label>
              <input onChange={e => this.setState({ phoneNumber: e.target.value })} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan No Handpone"></input>
              <label className="text-sm text-gray-500 mt-8">Deskripsi</label>
              <textarea onChange={e => this.setState({ description: e.target.value })} className="text-sm py-3 px-3 border-gray-200 border-2 rounded text-gray-600" type="text" placeholder="Masukan Deskripsi" rows="10"></textarea>
              <button type="submit" className="w-full bg-yellow-500 text-white font-semibold mt-10 py-3 rounded hover:bg-yellow-400">Hire</button>

            </div>
            </form>

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
  hire: state.hire

})
const mapDispatchToProps = { getTalentProfile, getSkill, CreateHire }
export default connect(mapStateToProps, mapDispatchToProps)(Hire)
