const initialState = {
  token: null,
  userData: [],
  errMsg: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      return {
        ...state,
        token: action.payload.token,
        userData: action.payload.userData,
        errMsg: ''
      }
    }
    case 'AUTH_LOGIN_FAILED': {
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
