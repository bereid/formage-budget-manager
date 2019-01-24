const defaultState = {
  data: []
}

const getAllDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return Object.assign({}, state, { data: action.payload });
    default:
      return state;
  }
}

export default getAllDataReducer;