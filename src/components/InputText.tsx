import { useState, KeyboardEvent, useEffect, ChangeEvent } from "react";
import { KeysEnum } from "../models/keys";

interface Props {
  label?: string;
  value: string;
  updateValue: (value: string) => void;
}

export const InputText: React.FC<Props> = ({
  label,
  value,
  updateValue,
}) => {
  const [inputValue, setInputValue] = useState<string>(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.currentTarget?.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === KeysEnum.ENTER) updateValue(event?.currentTarget?.value);
  };

  return (
    <div className="flex flex-col gap-0.5 w-full">
      {label && (
        <label className="text-xs text-gray-400 font-medium capitalize">
          {label}
        </label>
      )}

      <input
        className="text-xs text-gray-700 font-medium w-full p-2 bg-gray-100 border border-gray-300"
        type="text"
        value={inputValue}
        onChange={(event) => handleInputChange(event)}
        onBlur={() => updateValue(inputValue)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
