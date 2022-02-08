import React from "react";
import { SHAPE } from "./constants";

const handleDragStart = (
  event: React.DragEvent<HTMLDivElement>,
  shape: SHAPE
) => {
  if (shape) {
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;

    const dragPayload = JSON.stringify({
      shape,
      offsetX,
      offsetY,
    });

    console.log("dragPayload", dragPayload);
  }
};

export const Palette = () => {
  return (
    <div className="shadow-lg shadow-gray-200 mb-12 rounded-xl z-50 bg-white p-4 w-8/12 border-2 border-gray-200 border-solid">
      <div className="flex gap-4">
        <div
          className="cursor-pointer"
          draggable
          onDragStart={(e) => handleDragStart(e, SHAPE.RECTANGLE)}
        >
          Rectangle
        </div>
        <div
          className="cursor-pointer"
          draggable
          onDragStart={(e) => handleDragStart(e, SHAPE.CIRCLE)}
        >
          Circle
        </div>
      </div>
    </div>
  );
};
