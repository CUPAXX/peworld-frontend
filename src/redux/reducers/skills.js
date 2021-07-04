const initialState = {
  skills: {},
  msg: ''
}

const skills = (state = initialState, action) => {
  switch (action.type) {
    case 'SKILLS': {
      return {
        ...state,
        skills: action.payload
      }
    }
    case 'ADD_SKILL': {
      return {
        ...state,
        msg: action.payload
      };
    }
    case 'ADD_SKILL_FAILED': {
      return {
        ...state,
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
export default skills
