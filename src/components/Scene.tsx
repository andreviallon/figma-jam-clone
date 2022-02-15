import { useEffect, useState } from "react";
import { Layer, Stage } from "react-konva";
import { Rectangle } from "./Rectangle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Shape, ShapeEnum } from "../models/shape";
import { KonvaEventObject } from "konva/lib/Node";
import { addShape } from "../state/stage/StageActions";

interface Window {
  width: number;
  height: number;
}

function getWindowDimensions(): Window {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export const Scene = () => {
  const { shapes } = useSelector((state: RootState) => state.stage);
  const [newShape, setNewShape] = useState<Array<Shape>>([]);

  const dispatch = useDispatch();

  const drawShape = (shape: Shape) => {
    dispatch(addShape(shape));
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (newShape.length === 0) {
      const shape: Shape = {
        shape: ShapeEnum.RECTANGLE,
        x: event?.target?.getStage()?.getPointerPosition()?.x ?? 0,
        y: event?.target?.getStage()?.getPointerPosition()?.y ?? 0,
        width: 0,
        height: 0,
        color: "blue",
      };
      setNewShape([shape]);
    }
    console.log("newShape", newShape);
  };

  const handleMouseMove = (event: KonvaEventObject<MouseEvent>) => {
    if (newShape.length === 1) {
      const sx = newShape[0].x;
      const sy = newShape[0].y;
      const x = event?.target?.getStage()?.getPointerPosition()?.x ?? 0;
      const y = event?.target?.getStage()?.getPointerPosition()?.y ?? 0;
      setNewShape([
        {
          shape: ShapeEnum.RECTANGLE,
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          color: "blue",
        },
      ]);
      console.log("newShape", newShape);
    }
  };

  const handleMouseUp = (event: KonvaEventObject<MouseEvent>) => {
    if (newShape.length === 1) {
      const sx = newShape[0].x;
      const sy = newShape[0].y;
      const x = event?.target?.getStage()?.getPointerPosition()?.x ?? 0;
      const y = event?.target?.getStage()?.getPointerPosition()?.y ?? 0;

      const shapeToAdd = {
        shape: ShapeEnum.RECTANGLE,
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        color: "blue",
      };
      drawShape(shapeToAdd);
      setNewShape([]);
    }
  };

  return (
    <>
      <Stage
        width={windowDimensions.width - 320}
        height={windowDimensions.height - 56}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {shapes?.map((shape, index) => (
            <Rectangle
              key={index}
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              color={shape.color}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};
