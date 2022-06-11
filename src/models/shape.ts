export enum ShapeEnum {
  RECTANGLE = "rectangle",
}

export interface Shape {
  id: string;
  shape: ShapeEnum;
  x: number;
  y: number;
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  color: string;
  hasStroke: boolean;
  strokeColor: string;
  strokeWidth: number;
  offsetX: number;
  offsetY: number;
}
