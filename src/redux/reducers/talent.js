const initialState = {
  talent: [],
  pageInfo: []
};

const talent = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TALENT': {
      return {
        ...state,
        talent: action.payload,
        pageInfo: action.payload.pageInfo
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
