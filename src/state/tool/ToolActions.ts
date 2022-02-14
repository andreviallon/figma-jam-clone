import { ToolEnum } from "../../models/tool";
import { ToolStateDispatchType } from "./ToolStateModel";

export const TOOL_ACTIONS = {
  SELECT_TOOL: "Select Tool",
};

export const selectTool =
  (selectedTool: ToolEnum) => async (dispatch: ToolStateDispatchType) => {
    dispatch({ type: TOOL_ACTIONS.SELECT_TOOL, selectedTool });
  };
