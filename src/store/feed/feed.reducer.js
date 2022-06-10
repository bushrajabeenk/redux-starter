import {
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
  GET_FEEDS_ERROR,
} from "./feed.types";

const initState = {
  getFeeds: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_FEEDS_LOADING: {
      return { ...state };
    }
    case GET_FEEDS_SUCCESS: {
      return { ...state };
    }
    case GET_FEEDS_ERROR: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
