import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IToolBtn {
  faIcon: IconProp;
  isSelected: boolean;
}

export const ToolBtn: React.FC<IToolBtn> = ({ faIcon, isSelected }) => {
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
