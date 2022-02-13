import { useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import { Shape } from "../models/shape";
import { Rectangle } from "./Rectangle";

interface Window {
  width: number;
  height: number;
}

function getWindowDimensions(): Window {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export const Scene = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const stageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Stage
        width={windowDimensions.width - 320}
        height={windowDimensions.height - 56}
        ref={stageRef}
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
