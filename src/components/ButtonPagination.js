import React, { useEffect, useState } from 'react';
import { getTalent } from '../redux/actions/talent';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const ButtonPagination = (props) => {
  const { REACT_APP_BASE_URL: URL } = process.env;
  const [num, setNum] = useState(0)
  const history = useHistory()
  const { search } = props

  const handleTalentNext = (key, url, sort) => {
    props.getTalent(key, url, sort)
  };

  console.log(props)

  return (
    <div className='pagination' onChange={(e) => setNum(e.target.value)}>
      <div className="flex flex-row justify-center mb-16 space-x-3">
        <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-left text-3xl font-medium text-gray-400"></i></button>
        {
          props.talent.searchData &&
          props.numbers.map((dataNum) => (
              <button key={dataNum} onClick={
               !props.searchData
                 ? () => handleTalentNext('', dataNum, '')

                 : () => handleTalentNext(search, dataNum, '')

                } className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400 cursor-pointer">{dataNum}</button>
          ))
        }
        <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-right text-3xl font-medium text-gray-400"></i></button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  talent: state.talent
});

const mapDispatchToProps = { getTalent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonPagination);
