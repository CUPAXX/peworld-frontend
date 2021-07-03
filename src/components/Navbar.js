import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { authLogout } from '../redux/actions/auth'

const RightComponent = connect((state) => ({ auth: state.auth }), { authLogout })(({ auth, authLogout: logout }) => {
  if (auth.token !== null) {
    return (
          <div>
              <button onClick={logout} type="button" className="mt-1 rounded-lg bg-purple-600 font-medium text-white hover:bg-purple-500 px-5 py-2"> Logout </button>
          </div>
    );
  }
  return (
      <>
          <Link to="/login"><button className="h-11 w-24 border rounded-md border-purple-600 hover:bg-purple-200 text-purple-600 font-bold text-sm">Masuk</button></Link>
          <Link to="/register"><button className="h-11 w-24 text-white rounded-md bg-purple-600 hover:bg-purple-400 font-bold text-sm">Daftar</button></Link>
      </>

  )
})

class Navbar extends Component {
  goToHome = () => {
    this.props.history.push('/home')
  }

  render () {
    const { token } = this.props.auth
    return (
      <nav className="bg-white">
            <div className="flex flex-row mx-28 py-6 justify-between">

            <div className=" font-semibold">
              <img onClick={this.goToHome} className="" src="/assets/logo2.png" alt="logo"></img>
            </div>

            <div className="space-x-4">

            {token !== null
              ? <>

                  <div className="flex justify-between space-x-7">
                    <i className="fa fa-bell-o my-auto text-gray-400 font-bold" aria-hidden="true"></i>
                    <i className="fa fa-envelope-o my-auto font-bold text-gray-400 " aria-hidden="true"></i>
                    <div className="my-auto"><img className="rounded-full" src="/assets/peoplenav.png" /></div>
                    <RightComponent />
                  </div>

                </>

              : <>
                    <Link to="/login"><button className="h-11 w-24 border rounded-md border-purple-600 hover:bg-purple-200 text-purple-600 font-bold text-sm">Masuk</button></Link>
                    <Link to="/register"><button className="h-11 w-24 text-white rounded-md bg-purple-600 hover:bg-purple-400 font-bold text-sm">Daftar</button></Link>
                </>
                        }

            </div>

            </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth

})

export default connect(mapStateToProps)(Navbar)
