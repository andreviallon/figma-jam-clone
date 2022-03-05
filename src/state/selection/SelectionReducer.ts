import { SHAPE_ACTIONS } from "./SelectionActions";
import { SelectionShapeAction, SelectionState } from "./SelectionStateModel";

export const initialSelectionState: SelectionState = {
  selectedShapeId: null,
};

export const selectionReducer = (
  state: SelectionState = initialSelectionState,
  action: SelectionShapeAction
): SelectionState => {
  switch (action.type) {
    case SHAPE_ACTIONS.SELECT_SHAPE:
      return { ...state, selectedShapeId: action.selectedShapeId };
    case SHAPE_ACTIONS.RESET_SELECTION:
      return { ...state, selectedShapeId: null };
    default:
      return state;
  }
};
