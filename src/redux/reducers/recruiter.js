const initialState = {
  data: []
}

const recruiter = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_RECRUITER': {
      return {
        ...state,
        data: action.payload
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
