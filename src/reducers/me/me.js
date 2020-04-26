import uniqid from "uniqid";

const getInitialState = () => {
  const id = uniqid();
  return {
    id,
    handle: "woody",
    display_name: "Woody Allen",
    avatar: "https://66.media.tumblr.com/avatar_184591399ad6_128.pnj",
  };
};

const initialState = getInitialState();

const me = (state = initialState, action) => {
  const types = {};

  if (!types[action.type]) {
    return state;
  }

  return types[action.type]();
};

export default me;
