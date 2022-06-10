import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { feedReducer } from "./feed/feed.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
