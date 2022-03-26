import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  faIcon: IconProp;
}

export const ToolShape: React.FC<Props> = ({ faIcon }) => {
  return (
    <div className="cursor-pointer flex items-center justify-center text-lg w-14 h-14 text-neutral-900 hover:bg-neutral-200">
      <FontAwesomeIcon icon={faIcon} />
    </div>
  );
};
