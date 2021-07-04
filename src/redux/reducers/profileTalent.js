const initialState = {
  talentProfile: {},
  dataPicture: [],
  msg: ''
}

const talentProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAILS': {
      return {
        ...state,
        talentProfile: action.payload
      }
    }
    case 'UPDATE_TALENT': {
      return {
        ...state,
        msg: action.payload
      };
    }
    case 'UPDATE_TALENT_FAILED': {
      return {
        ...state,
        msg: action.payload
      };
    }
    case 'UPDATE_TALENT_PICTURE': {
      return {
        ...state,
        msg: 'success update profile picture!',
        dataPicture: action.payload
      };
    }
    case 'UPDATE_TALENT_PICTURE_FAILED': {
      return {
        ...state,
        msg: action.payload,
        dataPicture: []
      };
    }
    default : {
      return {
        ...state
      }
    }
  }
}
export default talentProfile
