import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Swal from 'sweetalert2'

import { connect } from 'react-redux'
import { addSkills } from '../redux/actions/skills'
import { addExperience } from '../redux/actions/getExperience'
import { addPortofolio } from '../redux/actions/getPortofolio'
import { updateTalent, getTalentProfile, updateTalentPicture } from '../redux/actions/profileTalent'

class EditProfileTalent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      company: '',
      jobDesk: '',
      jobType: '',
      address: '',
      description: '',

      picture: '',
      showPicture: '',
      position: '',
      companyName: '',
      startJoin: '',
      end: '',
      descriptionExperience: '',

      appName: '',
      linkRepo: '',
      type: '',
      picturePortofolio: '',

      skillList: [
        {
          id: 1,
          skill: 'javascript'
        },
        {
          id: 2,
          skill: 'Java'
        },
        {
          id: 3,
          skill: 'Python'
        },
        {
          id: 4,
          skill: 'C#'
        },
        {
          id: 5,
          skill: 'PHP'
        },
        {
          id: 6,
          skill: 'Golang'
        },
        {
          id: 7,
          skill: 'Kotlin'
        },
        {
          id: 8,
          skill: 'Laravel'
        },
        {
          id: 9,
          skill: 'CSS'
        },
        {
          id: 10,
          skill: 'HTML'
        }
      ],
      skillName: [],

      forUpdate: true
    }
  }

  basketSkill = (name) => {
    this.setState({
      skillName: [...this.state.skillName, name]
    })
  }

  addSkill = () => {
    const { token } = this.props.auth
    const { skillName } = this.state
    this.props.addSkills(skillName, token);
  }

  addExperience = () => {
    const { token } = this.props.auth
    const { position, companyName, startJoin, end, descriptionExperience } = this.state
    const data = {
      position,
      companyName,
      startJoin,
      end,
      descriptionExperience
    }
    this.props.addExperience(data, token)
  }

  addPortofolio = () => {
    const { token } = this.props.auth
    const { appName, linkRepo, type, picturePortofolio } = this.state
    const data = {
      appName,
      linkRepo,
      type,
      picturePortofolio
    }
    this.props.addPortofolio(data, token)
  }

  updateTalent = () => {
    const { token } = this.props.auth
    const { fullName, company, jobDesk, jobType, address, description } = this.state
    const data = {
      fullName,
      company,
      jobDesk,
      jobType,
      address,
      description
    }
    this.props.updateTalent(data, token)
      .then(() => {
        this.setState({ forUpdate: !this.state.forUpdate })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success edit profile',
          showConfirmButton: false,
          timer: 2000,
          iconColor: '#7F3FBF'
        });
      })
  }

  updateTalentPicture = () => {
    const { token } = this.props.auth
    const { picture } = this.state
    this.props.updateTalentPicture(picture, token)
      .then(() => {
        this.setState({ forUpdate: !this.state.forUpdate })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success edit photo profile',
          showConfirmButton: false,
          timer: 2000,
          iconColor: '#7F3FBF'
        });
      })
  }

  componentDidMount () {
    this.props.getTalentProfile(this.props.auth.userData.id)
      .then(() => {
        this.setState({
          fullName: this.props.talentProfile.talentProfile.full_name,
          jobDesk: this.props.talentProfile.talentProfile.job_desk,
          jobType: this.props.talentProfile.talentProfile.job_type,
          address: this.props.talentProfile.talentProfile.address,
          company: this.props.talentProfile.talentProfile.company,
          description: this.props.talentProfile.talentProfile.description,
          showPicture: this.props.talentProfile.talentProfile.picture
        })
      })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.forUpdate !== this.state.forUpdate) {
      this.props.getTalentProfile(this.props.auth.userData.id)
        .then(() => {
          this.setState({
            fullName: this.props.talentProfile.talentProfile.full_name,
            jobDesk: this.props.talentProfile.talentProfile.job_desk,
            jobType: this.props.talentProfile.talentProfile.job_type,
            address: this.props.talentProfile.talentProfile.address,
            company: this.props.talentProfile.talentProfile.company,
            description: this.props.talentProfile.talentProfile.description,
            showPicture: this.props.talentProfile.talentProfile.picture
          })
        })
    }
  }

  render () {
    const { talentProfile } = this.props?.talentProfile
    const { REACT_APP_BASE_URL: URL } = process.env
    return (
      <React.Fragment>
        <Navbar />

        <div className="w-full h-72 bg-purple-700">
        </div>

        <div className="flex flex-row -mt-56 mx-32 mb-64 space-x-7">

          {/* <Profile/> */}
          <div className="w-1/3">

            <div className="flex flex-col bg-white  rounded-md px-8 py-8">
              <img className="h-32 w-32 mx-auto rounded-full" src={`${URL}/upload/${this.state.showPicture}`}></img>
              <input name='picture' onChange={(e) => this.setState({ picture: e.target.files })} type="file" accept="image/x-png,image/gif,image/jpeg" id="icon-button-file" className="absolute" style={{ display: 'none' }} />
              <label className="flex justify-center items-center" htmlFor="icon-button-file">
                <span className="font-semibold text-sm text-gray-500 pt-4"><i className="fa fa-pencil pr-2"></i>Edit</span>
              </label>
              <button onClick={this.updateTalentPicture} className="bg-purple-700 text-white font-semibold py-3 hover:bg-purple-500">Save</button>
              <h2 className="font-semibold text-lg text-gray-700 pb-2 pt-5">{talentProfile?.full_name}</h2>
              <h2 className="text-sm text-gray-800 pb-3">{talentProfile?.job_desk}</h2>
              <h2 className="text-sm text-gray-500 pb-3"><i className="fa fa-map-marker pr-2 text-lg"></i>{talentProfile?.address}</h2>
              <h2 className="text-sm text-gray-500 pb-3">{talentProfile?.job_type}</h2>

            </div>

            <div className="my-8">
              <button onClick={this.updateTalent} className="bg-purple-700 text-white font-semibold py-3 hover:bg-purple-500  mb-4 w-full rounded-md ">Simpan</button>
              <button className="bg-white text-purple-700 font-semibold py-3 hover:bg-purple-200 border  border-purple-500   w-full rounded-md">Batal</button>
            </div>

          </div>

          <div className="w-2/3">

            <div className="flex flex-col bg-white rounded-md  divide-y px-8 py-8">
              <h2 className="font-semibold text-lg text-gray-700 pb-2 ">{talentProfile?.full_name}</h2>
              <label className="text-gray-500 text-sm pt-8" >Nama lengkap</label>
              <input value={this.state.fullName} onChange={(e) => this.setState({ fullName: e.target.value })} className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan Nama lengkap" />

              <label className="text-gray-500 text-sm pt-8" >Job desk</label>
              <input value={this.state.jobDesk} onChange={(e) => this.setState({ jobDesk: e.target.value })} className=" border shadow  py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Job desk" />

              <label className="text-gray-500 text-sm pt-8" >Job Type</label>
              <input value={this.state.jobType} onChange={(e) => this.setState({ jobType: e.target.value })} className=" border shadow  py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Job desk" />

              <label className="text-gray-500 text-sm pt-8" >Alamat</label>
              <input value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Alamat" />

              <label className="text-gray-500 text-sm pt-8" >Tempat kerja</label>
              <input value={this.state.company} onChange={(e) => this.setState({ company: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Masukan Tempat kerja" />

              <label className="text-gray-500 text-sm pt-8" >Deskripsi singkat</label>
              <input value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} className=" border shadow  pb-32 pt-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Tuliskan deskripsi singkat" />
            </div>

            {this.props.skills.msg === 'skills added' && <div className="flex flex-col bg-purple-400 text-purple-800 font-bold rounded-md mt-8 py-4 px-4">
              {this.props.skills.msg}!
            </div>}

            <div className="flex flex-col bg-white rounded-md  divide-y mt-8 px-8 py-8">
              <div className="font-semibold text-lg text-gray-700 ">Skill</div>

              <div className="flex flex-col pt-4 h-auto">
                <div className="border shadow w-full h-12 py-3 px-3 rounded text-gray-600 text-sm font-bold">{this.state.skillName.map(d => d + ' ')}</div>
                <div className="flex flex-row flex-wrap items-center h-auto ml-0 py-4 w-full">
                  {this.state.skillList.map((d) => (
                    <button key={d.id} onClick={() => this.basketSkill(d.skill)} className="py-1 m-1 w-24 font-bold focus:bg-yellow-600 hover:bg-yellow-400 bg-yellow-500 rounded text-white">{d.skill}</button>
                  ))}
                </div>
                <button onClick={this.addSkill} className="py-4 rounded-md font-bold hover:bg-yellow-400 bg-yellow-500 w-28 text-white">Simpan</button>
              </div>
            </div >

            {this.props.experience.msg === 'add experience success!' && <div className="flex flex-col bg-purple-400 text-purple-800 font-bold rounded-md mt-8 py-4 px-4">
              {this.props.experience.msg}
            </div>}

            <div className="flex flex-col bg-white rounded-md   px-8 py-8 mt-8 divide-y space-y-2">
              <h2 className="font-semibold text-lg text-gray-700 pb-2 ">Pengalaman kerja</h2>

              <div>

                <div className="flex flex-col">
                  <label className="text-gray-500 text-sm pt-8" >Posisi</label>
                  <input value={this.state.position} onChange={(e) => this.setState({ position: e.target.value })} className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="web developer" />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-500 text-sm pt-8" >Nama Perusahaan</label>
                  <input value={this.state.companyName} onChange={(e) => this.setState({ companyName: e.target.value })} className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Pt." />
                </div>

                <div className="flex flex-row space-x-5">
                  <div className="flex flex-1 flex-col">
                    <label className="text-gray-500 text-sm pt-8" >Mulai</label>
                    <input value={this.state.startJoin} onChange={(e) => this.setState({ startJoin: e.target.value })} className=" border shadow  py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Mulai" />
                  </div>

                  <div className="flex flex-1 flex-col w-full">
                    <label className=" text-gray-500 text-sm pt-8" >Selesai</label>
                    <input value={this.state.end} onChange={(e) => this.setState({ end: e.target.value })} className=" border shadow   py-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Selesai" />
                  </div>
                </div>

                <div className="flex flex-col mb-4 ">
                  <label className="text-gray-500 text-sm pt-8" >Deskripsi singkat</label>
                  <input value={this.state.descriptionExperience} onChange={(e) => this.setState({ descriptionExperience: e.target.value })} className=" border shadow  pb-32 pt-3 px-3 rounded text-gray-600 text-sm" type="text" placeholder="Deskripsikan pekerjaan anda" />
                </div>

              </div>

              <div className="pt-8">
                <button onClick={this.addExperience} className="bg-white text-yellow-500 font-semibold py-3 hover:bg-yellow-200 border  border-yellow-500  w-full rounded-md">Tambah pengalaman kerja</button>
              </div>

            </div>

            {this.props.portofolio.msg === 'add portofolio success!' && <div className="flex flex-col bg-purple-400 text-purple-800 font-bold rounded-md mt-8 py-4 px-4">
              {this.props.portofolio.msg}
            </div>}

            <div className="flex flex-col bg-white rounded-md   px-8 py-8 mt-8 divide-y space-y-2">
              <h2 className="font-semibold text-lg text-gray-700 pb-2 ">Portofolio</h2>

              <div>

                <div className="flex flex-col">
                  <label className="text-gray-500 text-sm pt-8" >Nama aplikasi</label>
                  <input value={this.state.appName} onChange={(e) => this.setState({ appName: e.target.value })} className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan nama aplikasi" />

                  <label className="text-gray-500 text-sm pt-8" >Link repository</label>
                  <input value={this.state.linkRepo} onChange={(e) => this.setState({ linkRepo: e.target.value })} className="border shadow  py-3 px-3 rounded text-gray-600  text-sm" type="text" placeholder="Masukan link repository" />
                </div>

                <div className="text-gray-500 text-sm pt-8" >Type portofolio</div>
                <div className="flex flex-row space-x-5">
                  <div className="flex flex-1 flex-row border shadow rounded">
                    <input value="web" onChange={(e) => this.setState({ type: e.target.value })} className="border-2 my-auto mx-4" name="type" type="radio" />
                    <label className="my-auto text-gray-500 text-sm py-4" >Aplikasi web</label>
                  </div>

                  <div className="flex flex-1 flex-row  border shadow rounded">
                    <input value="mobile" onChange={(e) => this.setState({ type: e.target.value })} className="border-2 my-auto mx-4" name="type" type="radio" />
                    <label className="my-auto text-gray-500 text-sm py-4" >Aplikasi mobile</label>
                  </div>
                </div>

                <div className="flex flex-col mb-4 ">
                  <label className="text-gray-500 text-sm pt-8" >Upload gambar</label>
                  <input name='picture' onChange={(e) => this.setState({ picturePortofolio: e.target.files })} type="file" accept="image/x-png,image/gif,image/jpeg" id="icon-button-picture" className="absolute" style={{ display: 'none' }} />
                  <label className="flex justify-center items-center" htmlFor="icon-button-picture">
                    <div className=" border-4 border-dashed w-full cursor-pointer py-20 text-center rounded text-gray-600 text-sm" >Upload Gambar Aplikasi Mobile</div>
                  </label>
                </div>

              </div>

              <div className="pt-8">
                <button onClick={this.addPortofolio} className="bg-white text-yellow-500 font-semibold py-3 hover:bg-yellow-200 border  border-yellow-500   w-full rounded-md">Tambah portofolio</button>
              </div>

            </div>

          </div>

        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  experience: state.experience,
  portofolio: state.portofolio,
  talentProfile: state.talentProfile,
  skills: state.skills
})

const mapDispatchToProps = {
  addExperience,
  addPortofolio,
  updateTalent,
  getTalentProfile,
  updateTalentPicture,
  addSkills
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileTalent)
