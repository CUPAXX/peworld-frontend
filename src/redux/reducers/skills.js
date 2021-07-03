const initialState = {
  skills: {}
}

const skills = (state = initialState, action) => {
  switch (action.type) {
    case 'SKILLS': {
      return {
        ...state,
        skills: action.payload
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
export default skills
