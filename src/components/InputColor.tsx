import { ChangeEvent } from "react";

interface Props {
  color: string;
  updateValue: (value: string) => void;
}

export const InputColor: React.FC<Props> = ({
  color,
  updateValue,
}) => {
  const handleInputColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateValue(event.target.value);
  };

  return (
    <input
      className="w-10 h-10 flex items-center justify-center"
      name="fill"
      type="color"
      value={color}
      onChange={handleInputColorChange}
    />
  );
};
