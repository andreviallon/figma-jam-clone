import { ToolEnum } from "../../models/tool";

export type ToolState = {
  selectedTool: ToolEnum;
  disableShortcuts: boolean;
};

export type ToolStateAction = {
  type: string;
  selectedTool?: ToolEnum;
  disableShortcuts?: boolean;
};

export type ToolStateDispatchType = (args: ToolStateAction) => ToolStateAction;
