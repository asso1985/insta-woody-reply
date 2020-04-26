import { combineReducers } from "redux";
import comments from "./comments";
import me from "./me";
import guest from "./guest";

const rootReducer = combineReducers({
  comments,
  me,
  guest,
});

export default rootReducer;
