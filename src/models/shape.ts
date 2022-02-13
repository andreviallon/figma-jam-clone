export enum ShapeEnum {
  RECTANGLE = "rectangle",
  CIRCLE = "circle",
  TRIANGLE = "triangle",
}

export interface Shape {
  shape: ShapeEnum;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}
