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

export const addPortofolio = (data, token) => async (dispatch) => {
  console.log(token);
  // eslint-disable-next-line no-undef
  const form = new FormData();
  form.append('app_name', data.appName);
  form.append('link_repo', data.linkRepo);
  form.append('type', data.type);
  form.append('picture', data.picturePortofolio[0]);
  try {
    const { data } = await http(token).post(`${URL}/user/talent/portofolio`, form);
    dispatch({
      type: 'ADD_PORTOFOLIO',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'ADD_PORTOFOLIO_FAILED',
      payload: err.response.data.data
    });
  }
};
