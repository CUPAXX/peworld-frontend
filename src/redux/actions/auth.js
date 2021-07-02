import { http } from '../../helpers/http'

const { REACT_APP_BASE_URL: URL } = process.env

export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('Email', email)
    form.append('password', password)
    try {
      const { data } = await http().post(`${URL}/auth/login`, form.toString())
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.data
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.data
      })
    }
  }
}

export const authRegisterTalent = (data) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('full_name', data.fullName)
    form.append('Email', data.email)
    form.append('phone_number', data.phoneNumber)
    form.append('password', data.password)
    form.append('confirm_password', data.confirmPassword)
    try {
      const { data } = await http().post(`${URL}/auth/register`, form.toString())
      dispatch({
        type: 'AUTH_REGISTER_TALENT',
        payload: data.data.registered
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_REGISTER_TALENT_FAILED',
        payload: err.response.data.data
      })
    }
  }
}

export const authRegisterRecruiter = (data) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('full_name', data.fullName)
    form.append('Email', data.email)
    form.append('phone_number', data.phoneNumber)
    form.append('password', data.password)
    form.append('confirm_password', data.confirmPassword)
    form.append('company', data.company)
    form.append('sector', data.sector)
    console.log(data);
    console.log(form.toString());
    try {
      const { data } = await http().post(`${URL}/auth/register/recruiter`, form.toString())
      dispatch({
        type: 'AUTH_REGISTER_TALENT',
        payload: data.data.registered
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_REGISTER_TALENT_FAILED',
        payload: err.response.data.data
      })
    }
  }
}

export const authLogout = () => {
  return {
    type: 'AUTH_LOGOUT'
  }
}
