import React from 'react';
import { getTalent } from '../redux/actions/talent';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const HomePagination = (props) => {
  const history = useHistory()
  const { search } = props

  const handleTalentNext = (key, url, sort) => {
    props.getTalent(key, url, sort)
  };

  return (
    <div className='pagination'>
      <div className="flex flex-row justify-center mb-16 space-x-3">
        <button className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm"><i className="fa fa-angle-left text-3xl font-medium text-gray-400"></i></button>
        {
          props.talent.searchData &&
          props.numbers.map((dataNum) => (
              <a key={dataNum} onClick={
               !props.searchData
                 ? () => handleTalentNext('', dataNum, '')

                 : () => handleTalentNext(search, dataNum, '')

                } className="bg-white w-12 h-12 flex justify-center items-center border-2 border-gray-300 rounded-sm font-bold text-gray-400 cursor-pointer">{dataNum}</a>
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
)(HomePagination);
