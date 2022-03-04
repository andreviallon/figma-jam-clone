import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToolEnum } from "../models/tool";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  faIcon: IconProp;
  tool: ToolEnum;
  selectedTool: ToolEnum;
}

export const ToolBtn: React.FC<Props> = ({ faIcon, tool, selectedTool }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(tool === selectedTool);
  }, [tool, selectedTool]);

  const classes = `cursor-pointer text-lg w-14 h-14 ${
    isSelected
      ? "bg-indigo-600 text-white"
      : "text-neutral-900 hover:bg-neutral-200"
  }`;
  return (
    <button className={classes}>
      <FontAwesomeIcon icon={faIcon} />
    </button>
  );
};
