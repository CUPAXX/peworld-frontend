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

export const addSkills = (skills, token) => async (dispatch) => {
  console.log(token);
  const form = new URLSearchParams();
  skills.map((value) => form.append('skill', value));
  console.log(form.getAll('skill'));
  try {
    const { data } = await http(token).post(`${URL}/user/talent/skill`, form.toString());
    console.log(data);
    dispatch({
      type: 'ADD_SKILL',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'ADD_SKILL_FAILED',
      payload: err.response.data.data
    });
  }
}
