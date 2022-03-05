export type SelectionState = {
  selectedShapeId?: string | null;
};

export type SelectionShapeAction = {
  type: string;
  selectedShapeId?: string;
};

export type SelectionStateDispatchType = (
  args: SelectionShapeAction
) => SelectionShapeAction;
