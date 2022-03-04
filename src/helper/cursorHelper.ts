import { CursorEnum } from "../models/cursor";
import { ToolEnum } from "../models/tool";

export const setCursor = (selectedTool: ToolEnum) => {
  if (selectedTool === ToolEnum.POINTER) {
    document.body.style.cursor = CursorEnum.DEFAULT;
  }

  if (selectedTool === ToolEnum.MOVE) {
    document.body.style.cursor = CursorEnum.MOVE;
  }

  if (selectedTool === ToolEnum.RECTANGLE || selectedTool === ToolEnum.CIRCLE) {
    document.body.style.cursor = CursorEnum.CROSSHAIR;
  }
};

export const resetCursor = () => {
  document.body.style.cursor = CursorEnum.DEFAULT;
};
