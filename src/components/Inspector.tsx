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

export const Inspector = () => {
  const [selectedShape, setSelectedShape] = useState<Shape | undefined>(
    undefined
  );
  const { shapes } = useSelector((state: RootState) => state.stage);
  const { selectedShapeId } = useSelector(
    (state: RootState) => state.selection
  );

  const dispatch = useDispatch();

  const dispatchUpdateShape = (
    key: string,
    value: number | string | boolean
  ) => {
    if (selectedShape)
      dispatch(updateShape({ ...selectedShape, [key]: value }));
  };

  const dispatchDeleteShape = () => {
    selectedShapeId && dispatch(deleteShape(selectedShapeId));
  };

  useEffect(() => {
    setSelectedShape(shapes?.find((shape) => shape.id === selectedShapeId));
  }, [shapes, selectedShapeId, selectedShape]);

  return (
    <div className="flex z-50 bg-gray-100 w-full h-full">
      <div className="flex flex-col w-full p-4 gap-2">
        {selectedShape ? (
          <>
            <div className="flex flex-col gap-2">
              <InputNumber
                label="x"
                value={selectedShape.x}
                updateValue={(newValue) => dispatchUpdateShape("x", newValue)}
              />
              <InputNumber
                label="y"
                value={selectedShape.y}
                updateValue={(newValue) => dispatchUpdateShape("y", newValue)}
              />
              <InputNumber
                label="Width"
                value={selectedShape.width}
                updateValue={(newValue) =>
                  dispatchUpdateShape("width", newValue)
                }
              />
              <InputNumber
                label="Height"
                value={selectedShape.height}
                updateValue={(newValue) =>
                  dispatchUpdateShape("height", newValue)
                }
              />
              <InputNumber
                label="Rotation"
                value={selectedShape.rotation}
                updateValue={(newValue) =>
                  dispatchUpdateShape("rotation", newValue)
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
                  />
                </div>
                <InputText
                  value={selectedShape.color}
                  updateValue={(newValue) =>
                    dispatchUpdateShape("color", newValue)
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
                  />
                </div>
                <InputText
                  value={selectedShape.strokeColor}
                  updateValue={(newValue) =>
                    dispatchUpdateShape("strokeColor", newValue)
                  }
                />
              </div>
              <InputNumber
                label="Stroke Width"
                value={selectedShape.strokeWidth}
                updateValue={(newValue) =>
                  dispatchUpdateShape("strokeWidth", newValue)
                }
              />
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
          <p className="text-sm font-medium w-full">
            Click on a shape to see properties and edit them
          </p>
        )}
      </div>
    </div>
  );
};
