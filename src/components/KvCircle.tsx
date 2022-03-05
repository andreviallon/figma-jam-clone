import React, { useEffect } from "react";
import { Circle, Transformer } from "react-konva";

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
}

export const KvCircle: React.FC<Props> = ({
  id,
  x,
  y,
  width = 100,
  height = 100,
  color = "#555555",
  rotation = 0,
  isSelected = false,
  onSelect,
}) => {
  const shapeRef: any = React.useRef();
  const trRef: any = React.useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Circle
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
