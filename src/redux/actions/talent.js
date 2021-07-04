import { http } from '../../helpers/http';
const { REACT_APP_BASE_URL: URL } = process.env;

export const getTalent = (key, url, sort) => async (dispatch) => {
  try {
    if (!url && !key && !sort) {
      const { data } = await http().get(`${URL}/user/talent`);
      dispatch({
        type: 'GET_TALENT',
        payload: {
          talent: data.data,
          pageInfo: data.pageInfo
        }
      });
      console.log(data)
    } else {
      if (!key) {
        const { data } = await http().get(`${URL}/user/talent?page=${url}`);
        dispatch({
          type: 'GET_TALENT_NEXT',
          payload: {
            talent: data.data,
            pageInfo: data.pageInfo
          }
        })
      } else {
        const { data } = await http().get(`${URL}/user/talent?search=${key}&page=${url}&sort=${sort}`)
        dispatch({
          type: 'SEARCH_TALENT',
          payload: {
            talent: data.data,
            pageInfo: data.pageInfo
          }
        })
      }
    }
  } catch (err) {
    console.log(err);
  }
};

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
