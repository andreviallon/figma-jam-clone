import { Rect } from "react-konva";

interface IRectangle {
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
  isPlaceholder?: boolean;
}

export const Rectangle: React.FC<IRectangle> = ({
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
    />
  );
};
