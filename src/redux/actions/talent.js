import { http } from '../../helpers/http';

const { REACT_APP_BASE_URL: URL } = process.env;

export const getTalent = () => {
  return async (dispatch) => {
    console.log('test')
    try {
      const { data } = await http().get(`${URL}/user/talent`);
      dispatch({
        type: 'GET_TALENT',
        payload: {
          talent: data.data,
          pageInfo: data.pageInfo
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
};
