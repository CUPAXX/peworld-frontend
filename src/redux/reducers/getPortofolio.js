const initialState = {
  portofolio: {},
  data: [],
  msg: ''
}

const portofolio = (state = initialState, action) => {
  switch (action.type) {
    case 'PORTO': {
      return {
        ...state,
        portofolio: action.payload
      }
    }
    case 'ADD_PORTOFOLIO': {
      return {
        ...state,
        data: action.payload,
        msg: 'add portofolio success!'
      };
    }
    case 'ADD_PORTOFOLIO_FAILED': {
      return {
        ...state,
        data: [],
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
export default portofolio
