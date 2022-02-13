import { StageStateDispatchType } from "./StageStateModel";
import * as actionTypes from "./StageActionTypes";
import { Shape } from "../models/shape";

export const addShape =
  (shape: Shape) => async (dispatch: StageStateDispatchType) => {
    dispatch({ type: actionTypes.ADD_SHAPE, shape });
  };
