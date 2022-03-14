import React, { useEffect } from "react";
import { Rect, Transformer } from "react-konva";
import { Shape, ShapeEnum } from "../models/shape";

interface Props {
  id: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  color?: string;
  hasStroke: boolean;
  strokeColor: string;
  strokeWidth: number;
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
  hasStroke = false,
  strokeColor = "#000000",
  strokeWidth = 1,
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
      hasStroke,
      strokeColor,
      strokeWidth,
      shape: ShapeEnum.RECTANGLE,
      x: Math.round(shapeRef.current.attrs.x),
      y: Math.round(shapeRef.current.attrs.y),
      width: Math.round(
        shapeRef.current.attrs.scaleX
          ? shapeRef.current.attrs.width * shapeRef.current.attrs.scaleX
          : shapeRef.current.attrs.width
      ),
      height: Math.round(
        shapeRef.current.attrs.scaleY
          ? shapeRef.current.attrs.height * shapeRef.current.attrs.scaleY
          : shapeRef.current.attrs.height
      ),
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
        stroke={hasStroke ? strokeColor : undefined}
        strokeWidth={hasStroke ? strokeWidth : undefined}
        draggable
        isSelected={isSelected}
        onClick={() => onSelect(id)}
        onDragStart={() => onSelect(id)}
        onDragMove={() => dispatchUpdateShape()}
        onTransform={() => dispatchUpdateShape()}
        onMouseDown={() => {
          dispatchUpdateShape();
          onSelect(id);
        }}
        onMouseUp={() => dispatchUpdateShape()}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(prevShape, newShape) => {
            if (newShape.width < 5 || newShape.height < 5) {
              return prevShape;
            }
            return newShape;
          }}
        />
      )}
    </>
  );
};
