const initialState = {
  data: [],
  pageInfo: [],
  talentSkill: []
};

const talent = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TALENT': {
      return {
        ...state,
        data: action.payload.talent,
        pageInfo: action.payload.pageInfo
      };
    }
    case 'GET_TALENT_SKILL': {
      return {
        ...state,
        talentSkill: action.payload.skill
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default talent;
