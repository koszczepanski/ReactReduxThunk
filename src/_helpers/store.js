import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../_reducers/";

import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
