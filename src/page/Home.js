import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import { useHistory } from 'react-router';
import picProfile from '../bg/profile.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer'

import { connect } from 'react-redux';
import { getTalent } from './../redux/actions/talent';

const Home = (props) => {
  const urlParams = qs.parse(props.location.search);
  const { pageInfo } = props.talent;
  const talent = props.talent;
  const history = useHistory();
  const { REACT_APP_BASE_URL: URL } = process.env;
  const [isClicked, setIsClicked] = useState(false);
  const [newSort, setNewSort] = useState([
    {
      name: 'full_name',
      skill: 'skill_name',
      address: 'address',
      freelance: 'freelance',
      fulltime: 'fulltime'
    }
  ]
  );
  const [num, setNum] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({
    search: urlParams.search ? urlParams.search : '',
    page: urlParams.page ? urlParams.page : '1',
    sort: urlParams.sort ? newSort : 'job_type'
  });
  let searchParams = `?search=${search.search}`;

  console.log(props.talent.talentSkill, 'skill');

  const handleToggle = () => {
    setIsClicked(true);
  };

  const handlePage = (data) => {
    setPage(data);
  };

  useEffect(() => {
    let i = 1;
    const pageArr = [];
    for (i; i <= pageInfo.lastPage; i++) {
      pageArr.push(i);
    };
    setNum(pageArr);
  }, [pageInfo]);

  useEffect(() => {
    handleToggle()
    setIsClicked(false)
  }, []);

  const handleTalent = (key, url, sort) => {
    props.getTalent(key, url, sort)
  }

  useEffect(() => {
    setSearch({
      ...search,
      sort: newSort
    })
  }, [newSort])

  useEffect(() => {
    setSearch({
      ...search,
      page: page
    })
  }, [page, search.page])

  useEffect(() => {
    props.getTalent(search.search, search.page, search.sort);
  }, [search]);

  useEffect(() => {
    searchParams += `&page=${search.page}`
    history.push(`/home/${searchParams}`);
  }, [searchParams, search.page])

  return (
      <React.Fragment>
        <Navbar />
        <section>
          <div className="bg-purple-700 ">
            <h2 className="text-white font-bold text-lg py-5 ml-28">Top Jobs</h2>
          </div>

          <div className="flex flex-col mx-28 my-10">

            <div className=" flex flex-row items-center bg-white px-2">
              <div onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleTalent(search.search, search.page, search.sort)
                }
              }} className="w-full">
              <input className="text-sm py-5 text-gray-500 w-full px-4 z-1 rounded-md" placeholder="Search for any skill" onChange={(e) => setSearch({
                ...search,
                search: e.target.value
              })}/>
              </div>
              <div>
              <i className="fa fa-search z-2 self-end mr-10 text-xl text-gray-600"></i>
              </div>
              <div>
              <div className='flex flex-col'>
              <select onClick={handleToggle} className="border-l-2 border-gray-500 mr-10 py-3 px-4 text-gray-500 bg-white text-sm cursor-pointer" onChange={(e) => {
                setNewSort(e.target.value)
              }}>
              {
                !isClicked &&
                <option oncChange={(e) => {
                  setNewSort(e.target.value.replace(''))
                }}>Sort By</option>
              }
                <option label='Name' value={newSort[0].name}>full_name</option>
                <option label='Skill' value={newSort[0].skill_name}>skill_name</option>
                <option label='Location' value={newSort[0].address}>address</option>
                <option label='Freelance' value={newSort[0].freelance}>freelance</option>
                <option label='Full Time' value={newSort[0].fulltime}> fulltime</option>
              </select>
              </div>
              </div>
              <div className="flex items-center">
              <button className="bg-purple-700 relative z-3 w-32 py-3 text-white rounded-md  self-end" onClick={() => handleTalent(search.search, search.page, search.sort)}>Search</button>
              </div>
            </div>

          <div className="flex flex-col bg-white mt-14">
            {
              talent.data.map((data, idx) => (
              <div key={idx} className="flex flex-row items-center border-b-2 py-5">
                <div className="mx-5 mb-3">
                  <img className="w-28 h-28 rounded-full" src={data.picture ? `${URL}/upload/${data.picture}` : picProfile}></img>
                </div>
                <div className="flex flex-col flex-1">
                  <h2 className="font-semibold text-2xl">{data.full_name}</h2>
                  <h2 className="text-gray-500 pt-2">{data.job_desk}</h2>
                  <h2 className="text-gray-500 pt-1"><i className="fa fa-map-marker pr-2 text-2xl"></i>{data.address}</h2>
                  <h2 className="text-gray-500 pt-1">{data.job_type}</h2>
                  <div className="flex flex-row space-x-3 pt-4 pb-5">
                  <div>
                  </div>
                  </div>
                </div>
                <div className="flex">
                  <Link to={`/profile/talent/${data.id_user}`}><button className="text-white bg-purple-700 py-3 px-6 rounded-sm mr-16">Lihat Profile</button></Link>
                </div>
              </div>
              ))}
            </div>
            </div>
            <div className='pagination'>
              <div className="flex flex-row justify-center mb-16 space-x-3">
                <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-left text-3xl font-medium text-gray-400"></i></button>
                {num.map((e, idx) => (
                  <button onClick={() => handlePage(e)} key={idx} className={`${page === e ? 'bg-purple-700' : 'bg-white'} 'bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400 cursor-pointer'`}>{e}</button>
                ))}
                <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-right text-3xl font-medium text-gray-400"></i></button>
              </div>
            </div>
        </section>
        <Footer />
      </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  talent: state.talent
});

const mapDispatchToProps = { getTalent }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
