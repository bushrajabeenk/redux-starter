import {
  GET_FEED_LOADING,
  GET_FEED_SUCCESS,
  GET_FEED_ERROR,
} from "./feed.types";

const initState = {
  getFeed: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_FEED_LOADING: {
      return {
        ...state,
        getFeed: {
          ...state.getFeed,
          loading: true,
          error: false,
        },
      };
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        getFeed: {
          ...state.getFeed,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_FEED_ERROR: {
      return {
        ...state,
        getFeed: {
          ...state.getFeed,
          loading: false,
          error: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
