import { ToolEnum } from "../../models/tool";
import { ToolStateDispatchType } from "./ToolStateModel";

export const TOOL_ACTIONS = {
  SELECT_TOOL: "Select Tool",
  DISABLE_SHORTCUTS: "Disable Shortcuts",
};

export const selectTool =
  (selectedTool: ToolEnum) => async (dispatch: ToolStateDispatchType) => {
    dispatch({ type: TOOL_ACTIONS.SELECT_TOOL, selectedTool });
  };

export const disableShortcuts =
  (disableShortcuts: boolean) => async (dispatch: ToolStateDispatchType) => {
    dispatch({ type: TOOL_ACTIONS.DISABLE_SHORTCUTS, disableShortcuts });
  };
