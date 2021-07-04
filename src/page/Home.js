import React, { useState, useEffect } from 'react';
import picProfile from '../bg/profile.png'
import Navbar from '../components/Navbar'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { getTalent, talentSkill } from './../redux/actions/talent';
import HomePagination from '../components/HomePagination';

const Home = (props) => {
  const talent = props.talent;
  const { REACT_APP_BASE_URL: URL } = process.env;
  const [getSkill, setGetSkill] = useState([])
  const [newSort, setNewSort] = useState([
    {
      name: 'full_name',
      skill: 'skill_name',
      address: 'address',
      freelance: 'freelance',
      fulltime: 'fulltime'
    }
  ]
  )
  const [search, setSearch] = useState('');
  const [num, setNum] = useState([]);

  useEffect(() => {
    props.getTalent()
  }, [num[0]]);

  const getPageNum = () => {
    let i = 1
    const pageArr = []
    for (i; i <= props.talent.pageInfo.lastPage; i++) {
      pageArr.push(i)
    }
    setNum(pageArr)
  }

  const getTalentSkill = (data) => {
    const skillArr = []
    const newSkillArr = []
    data.map((e) => {
      skillArr.push(props.talentSkill(e.id))
      return e
    })
    setGetSkill(skillArr)
  }

  useEffect(async () => {
    getTalentSkill(talent.data)
  }, [])

  const handleTalent = (key, url, sort) => {
    props.getTalent(key, url, sort)
  }
  useEffect(() => {
    handleTalent()
  }, [])

  useEffect(() => {
    getPageNum()
  }, [talent]);

  return (
      <React.Fragment>
        <Navbar/>
        <section>
          <div className="bg-purple-700 ">
            <h2 className="text-white font-bold text-lg py-5 ml-28">Top Jobs</h2>
          </div>

          <div className="flex flex-col mx-28 my-10">

            <div className=" flex flex-row items-center bg-white px-2">
              <div onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleTalent(search, '', '')
                }
              }} className="w-full">
              <input className="text-sm py-5 text-gray-500 w-full px-4 z-1 rounded-md" placeholder="Search for any skill" onChange={(e) => setSearch(e.target.value)}/>
              </div>
              <div>
              <i className="fa fa-search z-2 self-end mr-10 text-xl text-gray-600"></i>
              </div>
              <div>
              <div className='flex flex-col'>
              <select className="border-l-2 border-gray-500 mr-10 py-3 px-4 text-gray-500 bg-white text-sm cursor-pointer" onChange={(e) => {
                setNewSort(e.target.value)
              }}>
                <option value={newSort[0].name}>full_name</option>
                <option value={newSort[0].skill_name}>skill_name</option>
                <option value={newSort[0].address}>address</option>
                <option value={newSort[0].freelance}>freelance</option>
                <option value={newSort[0].fulltime}> fulltime</option>
              </select>
              </div>
              </div>
              <div className="flex items-center">
              <button className="bg-purple-700 relative z-3 w-32 py-3 text-white rounded-md  self-end" onClick={
                props.searchData
                  ? () => handleTalent(search, '', '')

                  : () => handleTalent(search, '', newSort)

                }>Search</button>
              </div>
            </div>

          <div className="flex flex-col bg-white mt-14">
            {
              (
                talent.searchData.length > 0
                  ? (
                      talent.searchData.map((data, idx) => (
                      <div key={idx} className="flex flex-row items-center border-b-2 py-5">
                        <div className="mx-5 mb-3">
                          <img className="w-28 h-28" src={data.picture ? `${URL}/upload/${data.picture}` : picProfile}></img>
                        </div>
                        <div className="flex flex-col flex-1">
                          <h2 className="font-semibold text-2xl">{data.full_name}</h2>
                          <h2 className="text-gray-500 pt-2">{data.job_desk}</h2>
                          <h2 className="text-gray-500 pt-1"><i className="fa fa-map-marker pr-2 text-2xl"></i>{data.address}</h2>
                          <h2 className="text-gray-500 pt-1">{data.job_type}</h2>
                          <div className="flex flex-row space-x-3 pt-4 pb-5">
                          <div>
                          {
                            props.talent.talentSkill.map((e) => (
                              <button key={e} className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">{e}</button>
                            ))
                          }
                          </div>
                          </div>
                        </div>
                        <div className="flex">
                          <Link to="/profile/talent"><button className="text-white bg-purple-700 py-3 px-6 rounded-sm mr-16">Lihat Profile</button></Link>
                        </div>
                      </div>
                      ))
                    )
                  : (
                      talent.data.map((data, idx) => (
                      <div key={idx} className="flex flex-row items-center border-b-2 py-5">
                        <div className="mx-5 mb-3">
                          <img className="w-28 h-28" src={data.picture ? data.picture : picProfile}></img>
                        </div>
                        <div className="flex flex-col flex-1">
                          <h2 className="font-semibold text-2xl">{data.full_name}</h2>
                          <h2 className="text-gray-500 pt-2">{data.job_desk}</h2>
                          <h2 className="text-gray-500 pt-1"><i className="fa fa-map-marker pr-2 text-2xl"></i>{data.address}</h2>
                          <h2 className="text-gray-500 pt-1">{data.job_type}</h2>
                          <div className="flex flex-row space-x-3 pt-4 pb-5">
                          <div>
                          {
                            props.talent.talentSkill.map((e) => (
                              <button key={e} className="text-sm bg-yellow-400 text-white border border-yellow-600 rounded-sm py-1 px-4">{e}</button>
                            ))
                          }
                          </div>
                          </div>
                        </div>
                        <div className="flex">
                          <Link to="/profile/talent"><button className="text-white bg-purple-700 py-3 px-6 rounded-sm mr-16">Lihat Profile</button></Link>
                        </div>
                      </div>
                      ))
                    ))
              }
            </div>
            </div>
            <HomePagination searchData={props.talent.searchData} numbers={num} search={search}/>
        </section>
      </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  talent: state.talent
});

const mapDispatchToProps = { getTalent, talentSkill }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
