import { http } from '../../helpers/http';
const { REACT_APP_BASE_URL: URL } = process.env;

export const getTalent = (key, num, sort) => async dispatch => {
  try {
    const { data } = await http().get(`${URL}/user/talent?search=${key}&page=${num}&sort=${sort}`)
    dispatch({
      type: 'GET_TALENT',
      payload: {
        talent: data.data,
        pageInfo: data.pageInfo
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export const talentSkill = (id) => async (dispatch) => {
  try {
    const { data } = await http().get(`${URL}/user/talent/skill/${id}`)
    dispatch({
      type: 'GET_TALENT_SKILL',
      payload: {
        skill: data.data
      }
    });
  } catch (err) {
    console.log(err);
  }
};
