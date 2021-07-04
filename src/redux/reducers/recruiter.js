const initialState = {
  data: [],
  sccMsg: ''
}

const recruiter = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_RECRUITER': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'PROFILE_RECRUITER_UPDATE': {
      return {
        ...state,
        sccMsg: 'Success'
      }
    } case 'PROFILE_RECRUITER_UPDATE_PICTURE': {
      return {
        ...state,
        sccMsg: 'Success'
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default recruiter
