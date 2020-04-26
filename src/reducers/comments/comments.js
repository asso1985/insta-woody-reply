import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_REPLY,
} from "../../constants/action-types";
const getInitialState = () => {
  return {
    isLoading: false,
    list: [],
  };
};

const initialState = getInitialState();

const comments = (state = initialState, action) => {
  const types = {
    [ADD_COMMENT_REQUEST]: () => ({
      ...state,
      isLoading: true,
    }),
    [ADD_COMMENT_SUCCESS]: () => ({
      ...state,
      list: action.list,
      isLoading: false,
    }),
    [ADD_REPLY]: () => ({
      ...state,
      list: action.list,
      isLoading: false,
    }),
  };

  if (!types[action.type]) {
    return state;
  }

  return types[action.type]();
};

export default comments;
