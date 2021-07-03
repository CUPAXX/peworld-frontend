const initialState = {
  talentProfile: {}
}

const talentProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAILS': {
      return {
        ...state,
        talentProfile: action.payload
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
export default talentProfile
