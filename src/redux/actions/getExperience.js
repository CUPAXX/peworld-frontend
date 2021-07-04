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

export const addExperience = (data, token) => async (dispatch) => {
  console.log(token);
  const form = new URLSearchParams();
  form.append('position', data.position);
  form.append('company_name', data.companyName);
  form.append('start_join', data.startJoin);
  form.append('end', data.end);
  form.append('description', data.descriptionExperience);
  console.log(form.toString());
  try {
    const { data } = await http(token).post(`${URL}/user/talent/experience`, form.toString());
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'ADD_EXPERIENCE_FAILED',
      payload: err.response.data.data
    });
  }
};
