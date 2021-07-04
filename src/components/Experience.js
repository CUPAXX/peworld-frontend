import React, { Component } from 'react';
import itemexpe from '../bg/itemexpe.png'
class Experience extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <React.Fragment>
        {this.props.data.experience.map((item, idx) => (
                <div key={idx} className="flex flex-col mt-10">
                <div className="flex flex-row">
                <div className="mr-5">
                  <img className="w-20 h-20" src={itemexpe}></img>
                  </div>
                  <div className="flex flex-col border-b border-gray-400 ">
                    <h2 className="font-bold text-lg">{item.position}</h2>
                    <h2 className="font-semibold text-md text-gray-500">{item.company_name}</h2>
                    <h2 className="text-sm text-gray-400">{item.start_join.substring(0, 10)} - {item.end.substring(0, 10)}</h2>
                    <h2 className="text-sm text-gray-400 pb-5" style={{ width: '420px' }}>{item.description}</h2>
                  </div>
                </div>
              </div>
        ))}

      </React.Fragment>
    );
  }
}

export default Experience
