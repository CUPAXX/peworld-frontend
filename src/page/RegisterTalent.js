import React, { Component } from 'react';
import ImageRegister from '../components/ImageRegister'
import FormRegisterTalent from '../components/FormRegisterTalent'

class RegisterTalent extends Component {
  render () {
    return (
      <React.Fragment>
        <section className="flex flex-row  bg-gray-100">

          <ImageRegister />
          <FormRegisterTalent />
        </section>
      </React.Fragment>
    );
  }
}

export default RegisterTalent;
