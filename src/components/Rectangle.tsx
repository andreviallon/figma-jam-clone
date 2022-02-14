import React from "react";
import { Rect } from "react-konva";

interface Props {
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
  isPlaceholder?: boolean;
}

export const Rectangle: React.FC<Props> = ({
  x,
  y,
  width = 100,
  height = 100,
  color = "#555555",
  isPlaceholder = false,
}) => {
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      opacity={isPlaceholder ? 0.6 : 1}
      draggable={true}
    />
  );
};
