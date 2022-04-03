import { ToolState, ToolStateAction } from "./ToolStateModel";
import { ToolEnum } from "../../models/tool";
import { TOOL_ACTIONS } from "./ToolActions";

export const initialToolState: ToolState = {
  selectedTool: ToolEnum.POINTER,
  disableShortcuts: false,
};

export const toolReducer = (
  state: ToolState = initialToolState,
  action: ToolStateAction
): ToolState => {
  switch (action.type) {
    case TOOL_ACTIONS.SELECT_TOOL:
      return {
        ...state,
        selectedTool: action.selectedTool ?? ToolEnum.POINTER,
      };
    case TOOL_ACTIONS.DISABLE_SHORTCUTS:
      return {
        ...state,
        disableShortcuts: action.disableShortcuts ?? false,
      };
    default:
      return state;
  }
};
