import { ToolEnum } from "../../models/tool";

export type ToolState = {
  selectedTool: ToolEnum;
};

export type ToolStateAction = {
  type: string;
  selectedTool: ToolEnum;
};

export type ToolStateDispatchType = (args: ToolStateAction) => ToolStateAction;
