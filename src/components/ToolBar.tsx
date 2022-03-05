import { ToolBtn } from "./ToolBtn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { ToolEnum } from "../models/tool";
import { selectTool } from "../state/tool/ToolActions";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import {
  faCircle,
  faHandPaper,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";

export const ToolBar = () => {
  const dispatch = useDispatch();
  const { selectedTool } = useSelector((state: RootState) => state.tool);

  const setSelectedTool = (tool: ToolEnum) => {
    dispatch(selectTool(tool));
  };

  return (
    <div className="flex z-50 bg-gray-100 w-14">
      <div className="flex flex-col w-full">
        <div onClick={() => setSelectedTool(ToolEnum.POINTER)}>
          <ToolBtn
            faIcon={faArrowPointer}
            tool={ToolEnum.POINTER}
            selectedTool={selectedTool}
          />
        </div>
        <div onClick={() => setSelectedTool(ToolEnum.MOVE)}>
          <ToolBtn
            faIcon={faHandPaper}
            tool={ToolEnum.MOVE}
            selectedTool={selectedTool}
          />
        </div>
        <div onClick={() => setSelectedTool(ToolEnum.RECTANGLE)}>
          <ToolBtn
            faIcon={faSquare}
            tool={ToolEnum.RECTANGLE}
            selectedTool={selectedTool}
          />
        </div>
        <div onClick={() => setSelectedTool(ToolEnum.CIRCLE)}>
          <ToolBtn
            faIcon={faCircle}
            tool={ToolEnum.CIRCLE}
            selectedTool={selectedTool}
          />
        </div>
      </div>
    </div>
  );
};
