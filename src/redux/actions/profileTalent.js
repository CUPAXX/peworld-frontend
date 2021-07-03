import { http } from '../../helpers/http'
const { REACT_APP_BASE_URL: URL } = process.env

export const getTalentProfile = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/user/talent/${id}`)
    dispatch({
      type: 'DETAILS',
      payload: data.data
    })
  }
}
