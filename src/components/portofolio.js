import React, { Component } from 'react';
import itemPorto from '../bg/itemPorto.png'
const { REACT_APP_BASE_URL: URL } = process.env
class portofolio extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="grid grid-cols-3 mt-4 gap-3">
        {this.props.data.portofolio.map((item, idx) => (
                <div key={idx}>
                <img className="h-28 w-56 rounded-md " src={`${URL}/upload/${item.picture}`}></img>
                <h2 className="text-xs text-gray-800 text-center">{item.app_name}</h2>
              </div>
        ))}

              </div>
      </React.Fragment>
    );
  }
}

export default portofolio;
