import { useEffect, useState } from "react";
import { Layer, Stage } from "react-konva";
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
      >
        <Layer>
          <Rectangle x={100} y={100} />
        </Layer>
      </Stage>
    </>
  );
};
