const initialState = {
  data: [],
  searchData: [],
  talentSkill: [],
  pageInfo: []
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
    case 'GET_TALENT_NEXT': {
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload.talent
        ],
        pageInfo: action.payload.pageInfo
      };
    }
    case 'SEARCH_TALENT': {
      return {
        ...state,
        searchData: [
          ...state.searchData,
          ...action.payload.talent
        ],
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
