import Konva from "konva";
import { useEffect, useState } from "react";
import { Layer, Stage } from "react-konva";

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
        height={windowDimensions.height - 60}
      >
        <Layer>
          <Rect x={100} y={100} width={200} height={200} fill="#555555" />
        </Layer>
      </Stage>
    </>
  );
};
