import { StageStateDispatchType } from "./StageStateModel";
import { Shape } from "../../models/shape";

export const SHAPE_ACTIONS = {
  ADD_SHAPE: "Add Shape",
  UPDATE_SHAPE: "Update Shape",
  REMOVE_SHAPE: "Remove Shape",
};

export const addShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: SHAPE_ACTIONS.ADD_SHAPE, shape });
  };

export const updateShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: SHAPE_ACTIONS.UPDATE_SHAPE, shape });
  };
