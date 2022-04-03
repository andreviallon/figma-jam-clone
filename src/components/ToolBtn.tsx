import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToolEnum } from "../models/tool";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ActionEnum } from "../models/action";

interface Props {
  faIcon: IconProp;
  action?: ActionEnum;
  tool?: ToolEnum;
  selectedTool?: ToolEnum;
  disabled?: boolean;
}

export const ToolBtn: React.FC<Props> = ({
  faIcon,
  tool,
  selectedTool,
  disabled,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedTool ? tool === selectedTool : false);
  }, [tool, selectedTool]);

  const getClasses = (): string => {
    let classes = "cursor-pointer text-lg w-14 h-14 ";

    classes += isSelected
      ? "bg-indigo-600 text-white"
      : "text-neutral-900 hover:bg-neutral-200";

    classes += disabled ? " opacity-30 cursor-not-allowed" : "";

    return classes;
  };

  return (
    <button className={getClasses()} disabled={disabled}>
      <FontAwesomeIcon icon={faIcon} />
    </button>
  );
};
