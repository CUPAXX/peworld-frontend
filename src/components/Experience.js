import React, { Component } from 'react';
import itemexpe from '../bg/itemexpe.png'

class Experience extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="flex flex-col mt-10">
          <div className="flex flex-row">
            <div className="mr-5">
            <img className="w-18 h-18" src={itemexpe}></img>
            </div>
            <div className="flex flex-col border-b border-gray-400">
              <h2 className="font-bold text-lg">Engineer</h2>
              <h2 className="font-semibold text-lg text-gray-500">Tokopedia</h2>
              <h2 className="text-md text-gray-400">July 2019 - January 2020 6 months</h2>
              <h2 className="text-sm text-gray-400 pb-10" style={{ width: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex flex-row">
            <div className="mr-5">
            <img className="w-18 h-18" src={itemexpe}></img>
            </div>
            <div className="flex flex-col border-b border-gray-400">
              <h2 className="font-bold text-lg">Engineer</h2>
              <h2 className="font-semibold text-lg text-gray-500">Tokopedia</h2>
              <h2 className="text-md text-gray-400">July 2019 - January 2020 6 months</h2>
              <h2 className="text-sm text-gray-400 pb-10" style={{ width: '500px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
