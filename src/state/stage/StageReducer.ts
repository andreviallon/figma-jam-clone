import { StageShapeAction, StageState } from "./StageStateModel";
import { ShapeEnum } from "../../models/shape";
import { SHAPE_ACTIONS } from "./StageActions";
import { generateId } from "../../helper/idHelper";

export const initialStageState: StageState = {
  shapes: [
    {
      id: generateId(),
      color: "#4523fa",
      height: 100,
      width: 100,
      x: 100,
      y: 100,
      offsetX: 0,
      offsetY: 0,
      rotation: 0,
      shape: ShapeEnum.RECTANGLE,
      hasStroke: false,
      strokeColor: "#000000",
      strokeWidth: 2,
    },
    {
      id: generateId(),
      color: "#555555",
      height: 50,
      width: 200,
      x: 300,
      y: 400,
      offsetX: 0,
      offsetY: 0,
      rotation: 45,
      shape: ShapeEnum.RECTANGLE,
      hasStroke: false,
      strokeColor: "#000000",
      strokeWidth: 2,
    },
  ],
};

export const stageReducer = (
  state: StageState = initialStageState,
  action: StageShapeAction
): StageState => {
  switch (action.type) {
    case SHAPE_ACTIONS.ADD_SHAPE:
      const shape = action.shape;

      if (shape) {
        return {
          ...state,
          shapes:
            shape && state.shapes?.length ? [...state.shapes, shape] : [shape],
        };
      } else {
        return state;
      }

    case SHAPE_ACTIONS.UPDATE_SHAPE:
      if (state.shapes) {
        const newShapesArray = [];

        for (const shape of state.shapes) {
          newShapesArray.push(
            action.shape?.id === shape.id ? action.shape : shape
          );
        }

        return {
          ...state,
          shapes: newShapesArray,
        };
      } else {
        return state;
      }

    case SHAPE_ACTIONS.DELETE_SHAPE:
      return {
        ...state,
        shapes: state.shapes?.filter((shape) => shape.id !== action.shapeId),
      };
    default:
      return state;
  }
};
