import { Shape } from "../../models/shape";

export type StageState = {
  shapes?: Shape[];
};

export type StageShapeAction = {
  type: string;
  shape?: Shape;
  shapeId?: string;
};

export type StageStateDispatchType = (
  args: StageShapeAction
) => StageShapeAction;
