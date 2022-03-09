import { ChangeEvent } from "react";

interface Props {
  color: string;
  updateValue: (value: string) => void;
}

export const InspectorColorInput: React.FC<Props> = ({
  color,
  updateValue,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateValue(event.target.value);
  };

  return (
    <input
      className="value"
      name="fill"
      type="color"
      value={color}
      onChange={handleInputChange}
    />
  );
};
