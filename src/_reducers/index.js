import { combineReducers } from "redux";

import paginationReducer from "./pagination.reducer";

const rootReducer = combineReducers({
  pagination: paginationReducer,
});

export default rootReducer;
