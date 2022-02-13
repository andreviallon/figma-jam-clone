import { StageShapeAction, StageState } from "./StageStateModel";
import * as actionTypes from "./StageActionTypes";
import { ShapeEnum } from "../models/shape";

export const initialStageState: StageState = {
  shapes: [
    {
      color: "red",
      height: 100,
      width: 100,
      x: 100,
      y: 100,
      shape: ShapeEnum.RECTANGLE,
    },
    {
      color: "blue",
      height: 50,
      width: 200,
      x: 300,
      y: 400,
      shape: ShapeEnum.RECTANGLE,
    },
  ],
};

export const stageReducer = (
  state: StageState = initialStageState,
  action: StageShapeAction
): StageState => {
  switch (action.type) {
    case actionTypes.ADD_SHAPE:
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

    case actionTypes.REMOVE_SHAPE:
      return {
        ...state,
        shapes: state.shapes?.filter((_shape, index) => index !== action.index),
      };
    default:
      return state;
  }
};
