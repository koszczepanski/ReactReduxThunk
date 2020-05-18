const initialState = {
  page: 0,
  limit: 10,
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PAGINATION":
      return { ...state, page: action.page };
    case "SET_LIMIT":
      return { ...state, limit: action.limit };
    case "SET_DEFAULT":
      return { ...initialState };
    default:
      return state;
  }
}
