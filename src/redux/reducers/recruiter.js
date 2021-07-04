const initialState = {
  data: [],
  dataPicture: [],
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
        sccMsg: 'Success',
        dataPicture: action.payload
      }
    }
    case 'PROFILE_RECRUITER_UPDATE_PICTURE_FAILED': {
      return {
        ...state,
        msg: action.payload,
        dataPicture: []
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default recruiter
