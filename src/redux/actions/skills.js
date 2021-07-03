import { http } from '../../helpers/http'
const { REACT_APP_BASE_URL: URL } = process.env

export const getSkill = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/user/talent/skill/${id}`)
    dispatch({
      type: 'SKILLS',
      payload: data.data
    })
  }
}
