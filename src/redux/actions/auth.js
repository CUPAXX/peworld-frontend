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

export const authLogout = () => {
  return {
    type: 'AUTH_LOGOUT'
  }
}
