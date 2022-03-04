export enum ShapeEnum {
  RECTANGLE = "rectangle",
  CIRCLE = "circle",
  TRIANGLE = "triangle",
}

export interface Shape {
  id: string;
  shape: ShapeEnum;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
}
