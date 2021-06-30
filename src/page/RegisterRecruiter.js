import React, { Component } from 'react';
import ImageRegister from '../components/ImageRegister'
import FormRegisterRecruiter from '../components/FormRegisterRecruiter'

class RegisterRecruiter extends Component {
  render () {
    return (
      <React.Fragment>
        <section className="flex flex-row  bg-gray-100">

          <ImageRegister />
          <FormRegisterRecruiter />
        </section>
      </React.Fragment>
    );
  }
}

export default RegisterRecruiter;
