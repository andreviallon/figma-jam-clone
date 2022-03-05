import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { selectionReducer } from "./selection/SelectionReducer";
import { SelectionState } from "./selection/SelectionStateModel";
import { stageReducer } from "./stage/StageReducer";
import { StageState } from "./stage/StageStateModel";
import { toolReducer } from "./tool/ToolReducer";
import { ToolState } from "./tool/ToolStateModel";

export interface IState {
  stage: StageState;
  tool: ToolState;
  selection: SelectionState;
}

export const rootReducer = combineReducers({
  stage: stageReducer,
  tool: toolReducer,
  selection: selectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
