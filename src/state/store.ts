import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { stageReducer } from "./StageReducer";
import { StageState } from "./StageStateModel";

export interface IState {
  stage: StageState;
}

export const rootReducer = combineReducers({
  stage: stageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
