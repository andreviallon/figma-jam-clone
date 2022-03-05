import React, { useEffect } from "react";
import { Rect, Transformer } from "react-konva";
import { useDispatch } from "react-redux";
import { selectShape } from "../state/selection/SelectionActions";

interface Props {
  id: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
  rotation: number;
  isSelected?: boolean;
  onSelect: (id: string) => void;
  onUpdateShape: (newShape: Shape) => void;
}

export const KvRectangle: React.FC<Props> = ({
  id,
  x,
  y,
  width = 100,
  height = 100,
  color = "#555555",
  rotation = 0,
  isSelected = false,
  onSelect,
  onUpdateShape,
}) => {
  const shapeRef: any = React.useRef();
  const trRef: any = React.useRef();

  const dispatchUpdateShape = () => {
    const newShape: Shape = {
      id,
      color,
      shape: ShapeEnum.RECTANGLE,
      x: Math.round(shapeRef.current.attrs.x),
      y: Math.round(shapeRef.current.attrs.y),
      width: Math.round(shapeRef.current.attrs.width),
      height: Math.round(shapeRef.current.attrs.height),
      rotation: Math.round(shapeRef.current.attrs.rotation),
    };

    onUpdateShape(newShape);
  };

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        x={x}
        y={y}
        ref={shapeRef}
        width={width}
        height={height}
        rotation={rotation}
        fill={color}
        draggable={true}
        isSelected={isSelected}
        onClick={() => onSelect(id)}
        onDragMove={() => dispatchUpdateShape()}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
