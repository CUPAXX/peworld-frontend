import React, { Component } from 'react';
import itemPorto from '../bg/itemPorto.png'

class portofolio extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="grid grid-cols-3 mt-4 gap-3">
                <div>
                  <img className="h-28 w-56 rounded-md " src={itemPorto}></img>
                  <h2 className="text-xs text-gray-800 text-center">Remainder app</h2>
                </div>
                <div>
                  <img className="h-28 w-56 rounded-md " src={itemPorto}></img>
                  <h2 className="text-xs text-gray-800 text-center">Remainder app</h2>
                </div>
                <div>
                  <img className="h-28 w-56 rounded-md " src={itemPorto}></img>
                  <h2 className="text-xs text-gray-800 text-center">Remainder app</h2>
                </div>
                <div>
                  <img className="h-28 w-56 rounded-md " src={itemPorto}></img>
                  <h2 className="text-xs text-gray-800 text-center">Remainder app</h2>
                </div>
                <div>
                  <img className="h-28 w-56 rounded-md " src={itemPorto}></img>
                  <h2 className="text-xs text-gray-800 text-center">Remainder app</h2>
                </div>
                <div>
                  <img className="h-28 w-56 rounded-md " src={itemPorto}></img>
                  <h2 className="text-xs text-gray-800 text-center">Remainder app</h2>
                </div>
              </div>
      </React.Fragment>
    );
  }
}

export default portofolio;
