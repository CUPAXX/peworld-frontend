const initialState = {
  experience: {},
  data: [],
  msg: ''
}

const experience = (state = initialState, action) => {
  switch (action.type) {
    case 'EXP': {
      return {
        ...state,
        experience: action.payload
      }
    }
    case 'ADD_EXPERIENCE': {
      return {
        ...state,
        data: action.payload,
        msg: 'add experience success!'
      };
    }
    case 'ADD_EXPERIENCE_FAILED': {
      return {
        ...state,
        data: [],
        msg: action.payload
      };
    }
    default : {
      return {
        ...state
      }
    }
  }
}
export default experience
