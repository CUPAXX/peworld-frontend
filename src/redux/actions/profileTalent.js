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

export const updateTalent = (data, token) => async (dispatch) => {
  console.log(token);
  const form = new URLSearchParams();
  form.append('fullName', data.fullName);
  form.append('company', data.company);
  form.append('jobDesk', data.jobDesk);
  form.append('jobType', data.jobType);
  form.append('address', data.address);
  form.append('description', data.description);
  console.log(form.toString());
  try {
    const { data } = await http(token).put(`${URL}/user/talent/`, form.toString());
    dispatch({
      type: 'UPDATE_TALENT',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'UPDATE_TALENT_FAILED',
      payload: err.response.data.data
    });
  }
};

export const updateTalentPicture = (picture, token) => async (dispatch) => {
  // eslint-disable-next-line no-undef
  const form = new FormData();
  form.append('picture', picture[0]);

  try {
    const { data } = await http(token).patch(`${URL}/user/talent/picture`, form);
    dispatch({
      type: 'UPDATE_TALENT_PICTURE',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'UPDATE_TALENT_PICTURE_FAILED',
      payload: err.response.data.data
    });
  }
};
