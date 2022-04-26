import { StageStateDispatchType } from "./StageStateModel";
import { Shape } from "../../models/shape";

export const STAGE_ACTIONS = {
  ADD_SHAPE: "Add Shape",
  UPDATE_SHAPE: "Update Shape",
  DELETE_SHAPE: "Delete Shape",
  UNDO: "Undo",
  REDO: "Redo",
};

export const addShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: STAGE_ACTIONS.ADD_SHAPE, shape });
  };

export const updateShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: STAGE_ACTIONS.UPDATE_SHAPE, shape });
  };

export const deleteShape =
  (shapeId: string) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: STAGE_ACTIONS.DELETE_SHAPE, shapeId });
  };

export const undo = () => async (dispatch: StageStateDispatchType) => {
  dispatch({ type: STAGE_ACTIONS.UNDO });
};

export const redo = () => async (dispatch: StageStateDispatchType) => {
  dispatch({ type: STAGE_ACTIONS.REDO });
};
