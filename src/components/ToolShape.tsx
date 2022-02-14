import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShapeEnum } from "../models/shape";

interface Props {
  faIcon: IconProp;
  shape: ShapeEnum;
}

const handleDragStart = (
  event: React.DragEvent<HTMLDivElement>,
  shape: ShapeEnum
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

export const ToolShape: React.FC<Props> = ({ faIcon, shape }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-center text-lg w-14 h-14 text-neutral-900 hover:bg-neutral-200"
      draggable
      onDragStart={(e) => handleDragStart(e, shape)}
    >
      <FontAwesomeIcon icon={faIcon} />
    </div>
  );
};
