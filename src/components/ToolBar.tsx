import {
  faCircle,
  faHandPaper,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { Shape } from "../models/shape";
import { ToolBtn } from "./ToolBtn";
import { ToolShape } from "./ToolShape";

export const ToolBar = () => {
  return (
    <div className="flex z-50 bg-gray-100 w-14">
      <div className="flex flex-col w-full">
        <ToolBtn faIcon={faArrowPointer} isSelected={false} />
        <ToolBtn faIcon={faHandPaper} isSelected={true} />
        <div className="h-px border-b border-solid border-gray-300 mx-2 my-3" />
        <ToolShape faIcon={faSquare} shape={Shape.RECTANGLE} />
        <ToolShape faIcon={faCircle} shape={Shape.CIRCLE} />
      </div>
    </div>
  );
};
