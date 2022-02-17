import React from "react";
import { Circle, Rect } from "react-konva";
import { ShapeEnum } from "../models/shape";
interface Props {
  shape: ShapeEnum;
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
}

export const ShapeFactory: React.FC<Props> = ({
  shape,
  x,
  y,
  width = 100,
  height = 100,
  color = "#555555",
}) => {
  if (shape === ShapeEnum.RECTANGLE) {
    return (
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        draggable={true}
      />
    );
  } else {
    return (
      <Circle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        draggable={true}
      />
    );
  }
};
