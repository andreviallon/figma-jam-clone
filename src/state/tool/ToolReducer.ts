import { ToolState, ToolStateAction } from "./ToolStateModel";
import { ToolEnum } from "../../models/tool";
import { TOOL_ACTIONS } from "./ToolActions";

export const initialToolState: ToolState = {
  selectedTool: ToolEnum.POINTER,
};

export const toolReducer = (
  state: ToolState = initialToolState,
  action: ToolStateAction
): ToolState => {
  switch (action.type) {
    case TOOL_ACTIONS.SELECT_TOOL:
      return { ...state, selectedTool: action.selectedTool };
    default:
      return state;
  }
};
