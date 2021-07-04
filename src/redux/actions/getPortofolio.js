import { http } from '../../helpers/http'
const { REACT_APP_BASE_URL: URL } = process.env

export const getPortofolio = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/user/talent/portofolio/${id}`)
    dispatch({
      type: 'PORTO',
      payload: data.data
    })
  }
}
