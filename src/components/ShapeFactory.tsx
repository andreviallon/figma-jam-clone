import { Shape, ShapeEnum } from "../models/shape";
import { KvCircle } from "./KvCircle";
import { KvRectangle } from "./KvRectangle";
interface Props {
  id: string;
  shape: ShapeEnum;
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
  isSelected?: boolean;
  onSelect: (id: string) => void;
}

export const ShapeFactory: React.FC<Props> = ({
  id,
  shape,
  x,
  y,
  width = 100,
  height = 100,
  color = "#555555",
  isSelected = false,
  onSelect,
}) => {
  if (shape === ShapeEnum.RECTANGLE) {
    return (
      <KvRectangle
        id={id}
        x={x}
        y={y}
        width={width}
        height={height}
        color={color}
        isSelected={isSelected}
        onSelect={(id: string) => onSelect(id)}
      />
    );
  } else {
    return (
      <KvCircle
        id={id}
        x={x}
        y={y}
        width={width}
        height={height}
        color={color}
        isSelected={isSelected}
        onSelect={(id: string) => onSelect(id)}
      />
    );
  }
};
