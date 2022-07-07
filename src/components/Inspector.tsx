import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Shape } from "../models/shape";
import { deleteShape, updateShape } from "../state/stage/StageActions";
import { RootState } from "../state/store";
import { InputCheckbox } from "./InputCheckbox";
import { InputColor } from "./InputColor";
import { InspectorGroupLabel } from "./InspectorGroupLabel";
import { InputNumber } from "./InputNumber";
import { InputText } from "./InputText";
import { ShortcutTip } from "./ShortcutTips";
import { disableShortcuts } from "../state/tool/ToolActions";
import { isMacOS } from "../helper/os";

enum Axis {
  X = "x",
  Y = "y",
}

export const Inspector = () => {
  const [selectedShape, setSelectedShape] = useState<Shape | undefined>(
    undefined
  );
  const { present } = useSelector((state: RootState) => state.stage);
  const { selectedShapeId } = useSelector(
    (state: RootState) => state.selection
  );

  const dispatch = useDispatch();

  const dispatchUpdateShape = (
    key: string,
    value: number | string | boolean
  ) => {
    if (selectedShape && selectedShape?.[key as keyof Shape] !== value)
      dispatch(updateShape({ ...selectedShape, [key]: value }));
  };

  const dispatchUpdateShapeDimensions = (axis: Axis, value: number) => {
    if (axis === Axis.X && selectedShape && selectedShape.width !== value) {
      dispatch(updateShape({ ...selectedShape, width: value, scaleX: 1 }));
    }

    if (axis === Axis.Y && selectedShape && selectedShape.height !== value) {
      dispatch(updateShape({ ...selectedShape, height: value, scaleY: 1 }));
    }
  };

  const dispatchDeleteShape = () => {
    selectedShapeId && dispatch(deleteShape(selectedShapeId));
  };

  const dispatchDisableShortcuts = (disable: boolean) => {
    dispatch(disableShortcuts(disable));
  };

  useEffect(() => {
    setSelectedShape(
      present.shapes?.find((shape) => shape.id === selectedShapeId)
    );
  }, [present.shapes, selectedShapeId, selectedShape]);

  return (
    <div className="flex z-50 bg-gray-100 w-full h-full">
      <div className="flex flex-col w-full p-4 gap-2">
        {selectedShape ? (
          <>
            <div className="flex flex-col gap-2">
              <InspectorGroupLabel label="Properties" />
              <InputNumber
                label="x"
                value={selectedShape.x}
                updateValue={(newValue) => dispatchUpdateShape("x", newValue)}
                disableShortcuts={(disable: boolean) =>
                  dispatchDisableShortcuts(disable)
                }
              />
              <InputNumber
                label="y"
                value={selectedShape.y}
                updateValue={(newValue) => dispatchUpdateShape("y", newValue)}
                disableShortcuts={(disable: boolean) =>
                  dispatchDisableShortcuts(disable)
                }
              />
              <InputNumber
                label="Width"
                value={Math.round(selectedShape.width * selectedShape.scaleX)}
                updateValue={(newValue) => {
                  dispatchUpdateShapeDimensions(Axis.X, newValue);
                }}
                disableShortcuts={(disable: boolean) =>
                  dispatchDisableShortcuts(disable)
                }
              />
              <InputNumber
                label="Height"
                value={Math.round(selectedShape.height * selectedShape.scaleY)}
                updateValue={(newValue) => {
                  dispatchUpdateShapeDimensions(Axis.Y, newValue);
                }}
                disableShortcuts={(disable: boolean) =>
                  dispatchDisableShortcuts(disable)
                }
              />
              <InputNumber
                label="Rotation"
                value={selectedShape.rotation}
                updateValue={(newValue) =>
                  dispatchUpdateShape("rotation", newValue)
                }
                disableShortcuts={(disable: boolean) =>
                  dispatchDisableShortcuts(disable)
                }
              />
            </div>
            <div className="mt-2">
              <InspectorGroupLabel label="Fill" />
              <div className="flex justify-between items-center">
                <div className="mr-1">
                  <InputColor
                    color={selectedShape.color}
                    updateValue={(newValue) =>
                      dispatchUpdateShape("color", newValue)
                    }
                    disableShortcuts={(disable: boolean) =>
                      dispatchDisableShortcuts(disable)
                    }
                  />
                </div>
                <InputText
                  value={selectedShape.color}
                  updateValue={(newValue) =>
                    dispatchUpdateShape("color", newValue)
                  }
                  disableShortcuts={(disable: boolean) =>
                    dispatchDisableShortcuts(disable)
                  }
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1 mb-2">
                <InputCheckbox
                  value={selectedShape.hasStroke}
                  updateValue={(newValue) =>
                    dispatchUpdateShape("hasStroke", newValue)
                  }
                />
                <InspectorGroupLabel label="Stroke" />
              </div>
              <div className="flex justify-between items-center">
                <div className="mr-1">
                  <InputColor
                    color={selectedShape.strokeColor}
                    updateValue={(newValue) =>
                      dispatchUpdateShape("strokeColor", newValue)
                    }
                    disableShortcuts={(disable: boolean) =>
                      dispatchDisableShortcuts(disable)
                    }
                  />
                </div>
                <InputText
                  value={selectedShape.strokeColor}
                  updateValue={(newValue) =>
                    dispatchUpdateShape("strokeColor", newValue)
                  }
                  disableShortcuts={(disable: boolean) =>
                    dispatchDisableShortcuts(disable)
                  }
                />
              </div>
              <div className="mt-2">
                <InputNumber
                  label="Stroke Width"
                  value={selectedShape.strokeWidth}
                  updateValue={(newValue) =>
                    dispatchUpdateShape("strokeWidth", newValue)
                  }
                  disableShortcuts={(disable: boolean) =>
                    dispatchDisableShortcuts(disable)
                  }
                />
              </div>
            </div>
            <div className="mt-2">
              <InspectorGroupLabel label="Actions" />
              <button
                className="mt-2 p-1.5 w-full bg-red-500 text-white rounded hover:bg-red-600 transition font-medium"
                onClick={dispatchDeleteShape}
              >
                <span className="pr-2">Delete</span>
              </button>
            </div>
          </>
        ) : (
          <div>
            <p className="text-sm font-medium w-full mb-6">
              Click on a shape to see properties and edit them
            </p>
            <div className="flex flex-col gap-3">
              <ShortcutTip combo="V" text="pointer" />
              <ShortcutTip combo="H (Space to toggle)" text="move" />
              <ShortcutTip combo="R" text="rectangle tool" />
              <ShortcutTip
                combo={isMacOS() ? "\u2318 + Z" : "Ctrl + Z"}
                text="undo"
              />
              <ShortcutTip
                combo={isMacOS() ? "\u2318 + \u21E7 + Z" : "Ctrl + \u21E7 + Z"}
                text="redo"
              />
              <p></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
