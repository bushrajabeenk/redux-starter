import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { feedsReducer } from "./feed/feed.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feeds: feedsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
