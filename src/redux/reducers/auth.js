const initialState = {
  token: null,
  userData: [],
  msg: '',
  registered: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload.userData,
        msg: 'success login!'
      }
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        msg: action.payload
      }
    }
    case 'AUTH_REGISTER_TALENT': {
      return {
        ...state,
        registered: action.payload,
        msg: 'success register talent!'
      }
    }
    case 'AUTH_REGISTER_TALENT_FAILED': {
      return {
        ...state,
        msg: action.payload
      }
    }
    case 'AUTH_REGISTER_RECRUITER': {
      return {
        ...state,
        registered: action.payload,
        msg: 'success register recruiter!'
      }
    }
    case 'AUTH_REGISTER_RECRUITER_FAILED': {
      return {
        ...state,
        msg: action.payload
      }
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        userData: [],
        msg: '',
        registered: ''
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default auth
