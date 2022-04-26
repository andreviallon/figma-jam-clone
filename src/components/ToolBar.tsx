import { ToolBtn } from "./ToolBtn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { ToolEnum } from "../models/tool";
import { selectTool } from "../state/tool/ToolActions";
import {
  faArrowPointer,
  faRedo,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircle,
  faHandPaper,
  faSquare,
} from "@fortawesome/free-regular-svg-icons";
import { KeysEnum } from "../models/keys";
import { useKeyPress } from "../helper/useKeyPress";
import { useEffect, useState } from "react";
import { ActionEnum } from "../models/action";
import { redo, undo } from "../state/stage/StageActions";

export const ToolBar = () => {
  const dispatch = useDispatch();
  const { past, future } = useSelector((state: RootState) => state.stage);
  const { selectedTool } = useSelector((state: RootState) => state.tool);
  const [prevTool, setPrevTool] = useState(ToolEnum.POINTER);

  const setSelectedTool = (tool: ToolEnum) => {
    dispatch(selectTool(tool));
  };

  const spacePressed = useKeyPress(KeysEnum.SPACE);
  const oPressed = useKeyPress(KeysEnum.O);
  const hPressed = useKeyPress(KeysEnum.H);
  const rPressed = useKeyPress(KeysEnum.R);
  const vPressed = useKeyPress(KeysEnum.V);

  useEffect(() => {
    oPressed && setSelectedTool(ToolEnum.CIRCLE);
    hPressed && setSelectedTool(ToolEnum.MOVE);
    rPressed && setSelectedTool(ToolEnum.RECTANGLE);
    vPressed && setSelectedTool(ToolEnum.POINTER);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oPressed, hPressed, vPressed, rPressed]);

  useEffect(() => {
    setPrevTool(selectedTool);
    spacePressed ? setSelectedTool(ToolEnum.MOVE) : setSelectedTool(prevTool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spacePressed]);

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
        <div className="border-b border-solid border-gray-300 my-2 mx-1" />
        <div onClick={() => dispatch(undo())}>
          <ToolBtn
            faIcon={faUndo}
            action={ActionEnum.UNDO}
            disabled={past.length === 0}
          />
        </div>
        <div onClick={() => dispatch(redo())}>
          <ToolBtn
            faIcon={faRedo}
            action={ActionEnum.UNDO}
            disabled={future.length === 0}
          />
        </div>
      </div>
    </div>
  );
};
