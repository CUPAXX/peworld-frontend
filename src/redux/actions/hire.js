import { http } from '../../helpers/http'
const { REACT_APP_BASE_URL: URL } = process.env

export const CreateHire = (data, token, id) => {
  return async (dispatch) => {
    console.log(data);
    const form = new URLSearchParams()
    form.append('id_message', data.idMessage)
    form.append('company_name', data.companyName)
    form.append('Email', data.email)
    form.append('phone_number', data.phoneNumber)
    form.append('description', data.description)
    console.log(form.toString());
    try {
      const { data } = await http(token).post(`${URL}/hire/${id}`, form.toString())
      dispatch({
        type: 'HIRE',
        payload: data.data
      })
    } catch {}
  }
}

// // export const hire = (id) => {
// //   return async (dispatch) => {
// //     const { data } = await http().post(${URL}/hire/${id})
// //     dispatch({
// //       type: 'HIRE',
// //       payload: data.data
// //     })
// //   }
// // }
