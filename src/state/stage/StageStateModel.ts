import { Shape } from "../../models/shape";

export type StageState = {
  shapes?: Shape[];
};

export type StageShapeAction = {
  type: string;
  shape?: Shape;
  index?: number;
};

export type StageStateDispatchType = (
  args: StageShapeAction
) => StageShapeAction;
