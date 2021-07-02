const initialState = {
  token: null,
  userData: [],
  msg: '',
  errMsg: '',
  registered: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload.userData,
        msg: 'success',
        errMsg: ''
      }
    }
    case 'AUTH_LOGIN_FAILED': {
      return {
        ...state,
        errMsg: action.payload
      }
    }
    case 'AUTH_REGISTER_TALENT': {
      return {
        ...state,
        registered: action.payload,
        msg: 'success',
        errMsg: ''
      }
    }
    case 'AUTH_REGISTER_TALENT_FAILED': {
      return {
        ...state,
        errMsg: action.payload
      }
    }
    case 'AUTH_LOGOUT': {
      return {
        ...state,
        token: null,
        userData: [],
        errMsg: ''
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
