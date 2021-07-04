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

export const profileRecruiterUpdate = (data, token) => {
  return async (dispatch) => {
    // const form = new URLSearchParams()
    // form.append('Email', data.email)
    // form.append('full_name', data.full_name)
    // form.append('company', data.company)
    // form.append('sector', data.sector)
    // form.append('phone_number', data.phone_number)
    // form.append('city', data.city)
    // form.append('description', data.description)
    // form.append('instagram', data.instagram)
    // form.append('linkedin', data.linkedin)
    // console.log(form.get('Email'))

    const form = new URLSearchParams()
    for (const x in data) {
      if (data[x] !== '') {
        form.append(x, data[x])
      }
    }

    // eslint-disable-next-line no-undef
    // const form2 = new FormData()
    // if (data.picture !== undefined) {
    //   form2.append = ('picture', data.picture)
    // }

    // const { data2 } = await http(token).patch(`${URL}/user/recruiter/picture`, form2)
    const { data: axios } = await http(token).put(`${URL}/user/recruiter`, form)
    dispatch({
      type: 'PROFILE_RECRUITER_UPDATE',
      payload: axios.result
    })
  }
}

export const updateRecruiterPicture = (picture, token) => async (dispatch) => {
  // eslint-disable-next-line no-undef
  const form = new FormData()
  form.append('picture', picture[0])

  try {
    const { data } = await http(token).patch(`${URL}/user/recruiter/picture`, form)
    dispatch({
      type: 'PROFILE_RECRUITER_UPDATE_PICTURE',
      payload: data.data
    })
  } catch (err) {
    dispatch({
      type: 'PROFILE_RECRUITER_UPDATE_PICTURE_FAILED',
      payload: err.response.data.data
    });
  }
}
