import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Shape } from "../models/shape";
import { updateShape } from "../state/stage/StageActions";
import { RootState } from "../state/store";
import { InspectorGroupLabel } from "./InspectorGroupLabel";
import { InspectorInput } from "./InspectorInput";

export const Inspector = () => {
  const [selectedShape, setSelectedShape] = useState<Shape | undefined>(
    undefined
  );
  const { shapes } = useSelector((state: RootState) => state.stage);
  const { selectedShapeId } = useSelector(
    (state: RootState) => state.selection
  );

  const dispatch = useDispatch();

  const dispatchUpdateShape = (key: string, value: number) => {
    if (selectedShape)
      dispatch(updateShape({ ...selectedShape, [key]: value }));
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
              <InspectorGroupLabel label="Physical" />
              <InspectorInput
                label="x"
                value={selectedShape.x}
                updateValue={(newValue) => dispatchUpdateShape("x", newValue)}
              />
              <InspectorInput
                label="y"
                value={selectedShape.y}
                updateValue={(newValue) => dispatchUpdateShape("y", newValue)}
              />
              <InspectorInput
                label="Width"
                value={selectedShape.width}
                updateValue={(newValue) =>
                  dispatchUpdateShape("width", newValue)
                }
              />
              <InspectorInput
                label="Height"
                value={selectedShape.height}
                updateValue={(newValue) =>
                  dispatchUpdateShape("height", newValue)
                }
              />
              <InspectorInput
                label="Rotation"
                value={selectedShape.rotation}
                updateValue={(newValue) =>
                  dispatchUpdateShape("rotation", newValue)
                }
              />
            </div>
            <div className="mt-2">
              <InspectorGroupLabel label="Fill" />
            </div>
            <div className="mt-2">
              <InspectorGroupLabel label="Stroke" />
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
