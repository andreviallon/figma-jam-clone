import { useState, KeyboardEvent, useEffect } from "react";
import { KeysEnum } from "../models/keys";

interface Props {
  label: string;
  value: number;
  updateValue: (value: number) => void;
}

export const InspectorInput: React.FC<Props> = ({
  label,
  value,
  updateValue,
}) => {
  const [newValue, setNewValue] = useState<number>(value);

  useEffect(() => {
    setNewValue(value);
  }, [label, newValue, value]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === KeysEnum.ENTER) updateValue(newValue);
  };

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-xs text-gray-400 font-medium capitalize">
        {label}
      </label>
      <input
        className="text-xs text-gray-700 font-medium w-full p-2 bg-gray-100 border border-gray-300"
        type="number"
        name="name"
        value={newValue}
        onChange={(event) =>
          setNewValue(parseInt(event?.currentTarget?.value, 10))
        }
        onBlur={() => updateValue(newValue)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
