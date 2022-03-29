import { StageStateDispatchType } from "./StageStateModel";
import { Shape } from "../../models/shape";

export const SHAPE_ACTIONS = {
  ADD_SHAPE: "Add Shape",
  UPDATE_SHAPE: "Update Shape",
  DELETE_SHAPE: "Delete Shape",
};

export const addShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: SHAPE_ACTIONS.ADD_SHAPE, shape });
  };

export const updateShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: SHAPE_ACTIONS.UPDATE_SHAPE, shape });
  };

export const deleteShape =
  (shapeId: string) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: SHAPE_ACTIONS.DELETE_SHAPE, shapeId });
  };
