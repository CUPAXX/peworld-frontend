import { http } from '../../helpers/http'

const { REACT_APP_BASE_URL: URL } = process.env

export const profileRecruiter = (id) => {
  return async (dispatch) => {
    const { data } = await http().get(`${URL}/user/recruiter/${id}`)
    dispatch({
      type: 'PROFILE_RECRUITER',
      payload: data.data[0]
    })
  }
}
