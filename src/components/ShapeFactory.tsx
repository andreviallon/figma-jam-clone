import { Shape } from "../models/shape";
import { KvRectangle } from "./KvRectangle";

interface Props {
  id: string;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  width?: number;
  height?: number;
  scaleX?: number;
  scaleY?: number;
  rotation: number;
  color?: string;
  hasStroke: boolean;
  strokeColor: string;
  strokeWidth: number;
  isSelected?: boolean;
  isSelectable: boolean;
  isDraggable: boolean;
  onSelect: (id: string) => void;
  onUpdateShape: (newShape: Shape) => void;
}

export const ShapeFactory: React.FC<Props> = ({
  id,
  x,
  y,
  offsetX,
  offsetY,
  width = 100,
  height = 100,
  scaleX = 1,
  scaleY = 1,
  rotation,
  color = "#555555",
  hasStroke = false,
  strokeColor = "#000000",
  strokeWidth = 1,
  isSelected = false,
  isSelectable = false,
  isDraggable = false,
  onSelect,
  onUpdateShape,
}) => {
  return (
    <KvRectangle
      id={id}
      x={x}
      y={y}
      offsetX={offsetX}
      offsetY={offsetY}
      width={width}
      height={height}
      scaleX={scaleX}
      scaleY={scaleY}
      rotation={rotation}
      color={color}
      hasStroke={hasStroke}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
      isSelected={isSelected}
      isSelectable={isSelectable}
      isDraggable={isDraggable}
      onSelect={(id: string) => onSelect(id)}
      onUpdateShape={(newShape: Shape) => onUpdateShape(newShape)}
    />
  );
};
