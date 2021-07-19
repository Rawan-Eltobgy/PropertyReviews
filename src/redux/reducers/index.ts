import { combineReducers } from "redux";

import reviewsReducer from "./reviewsReducer";

const rootReducer = combineReducers({
  reviewsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
