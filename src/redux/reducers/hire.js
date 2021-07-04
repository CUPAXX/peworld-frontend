const initialState = {
  data: {}
}

const hire = (state = initialState, action) => {
  switch (action.type) {
    case 'HIRE': {
      return {
        ...state,
        data: action.payload
      }
    }
    // case 'HIRE_FAILED': {
    //   return {
    //     ...state,
    //     msg: action.payload
    //   }
    // }
    default : {
      return {
        ...state
      }
    }
  }
}
export default hire
