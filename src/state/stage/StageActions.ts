import { StageStateDispatchType } from "./StageStateModel";
import { Shape } from "../../models/shape";

export const SHAPE_ACTIONS = {
  ADD_SHAPE: "Add Shape",
  REMOVE_SHAPE: "Remove Shape",
};

export const addShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: SHAPE_ACTIONS.ADD_SHAPE, shape });
  };
