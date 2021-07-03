import { http } from '../../helpers/http'
const { REACT_APP_BASE_URL: URL } = process.env

export const getExperience = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/user/talent/experience/${id}`)
    dispatch({
      type: 'EXP',
      payload: data.data
    })
  }
}
