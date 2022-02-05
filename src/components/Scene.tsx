import { useEffect, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";

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
      <Stage width={windowDimensions.width} height={windowDimensions.height}>
        <Layer>
          <Rect x={100} y={100} width={200} height={200} fill="#555555" />
        </Layer>
      </Stage>
    </>
  );
};
