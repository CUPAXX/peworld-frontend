const initialState = {
  portofolio: {}
}

const portofolio = (state = initialState, action) => {
  switch (action.type) {
    case 'PORTO': {
      return {
        ...state,
        portofolio: action.payload
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
export default portofolio
