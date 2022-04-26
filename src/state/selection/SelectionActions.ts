import { SelectionStateDispatchType } from "./SelectionStateModel";

export const SELECTION_ACTIONS = {
  SELECT_SHAPE: "Select Shape",
  RESET_SELECTION: "Reset Selection",
};

export const selectShape =
  (selectedShapeId: string) => async (dispatch: SelectionStateDispatchType) => {
    dispatch({ type: SELECTION_ACTIONS.SELECT_SHAPE, selectedShapeId });
  };

export const resetSelectedShape =
  () => async (dispatch: SelectionStateDispatchType) => {
    dispatch({ type: SELECTION_ACTIONS.SELECT_SHAPE });
  };
