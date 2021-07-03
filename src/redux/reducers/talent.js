const initialState = {
  talent: [],
  pageInfo: []
};

const talent = (state = initialState, action) => {
  console.log(action.payload)
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
