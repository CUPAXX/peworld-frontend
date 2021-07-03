const initialState = {
  experience: {}
}

const experience = (state = initialState, action) => {
  switch (action.type) {
    case 'EXP': {
      return {
        ...state,
        experience: action.payload
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
export default experience
