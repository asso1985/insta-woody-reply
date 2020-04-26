import uniqid from "uniqid";

const getInitialState = () => {
  const id = uniqid();
  return {
    id,
    handle: "guest",
    display_name: "User Guest",
    avatar: `https://i.pravatar.cc/150?u=${id}`,
  };
};

const initialState = getInitialState();

const guest = (state = initialState, action) => {
  const types = {};

  if (!types[action.type]) {
    return state;
  }

  return types[action.type]();
};

export default guest;
