import { useState, KeyboardEvent, useEffect, ChangeEvent } from "react";
import { KeysEnum } from "../models/keys";

interface Props {
  label: string;
  value: number;
  updateValue: (value: number) => void;
  disableShortcuts: (value: boolean) => void;
}

export const InputNumber: React.FC<Props> = ({
  label,
  value,
  updateValue,
  disableShortcuts,
}) => {
  const [inputValue, setInputValue] = useState<string>(value.toString());
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    disableShortcuts(focused);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const onFocus = () => setFocused(true);

  const onBlur = () => {
    setFocused(false);
    dispatchValue();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.currentTarget?.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === KeysEnum.ENTER) {
      dispatchValue();
    }
  };

  const inputValueToNumber = (str: string) => parseInt(str);

  const dispatchValue = () => {
    if (!inputValue) {
      setInputValue(value.toString());
    } else {
      updateValue(inputValueToNumber(inputValue));
    }
  };

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-xs text-gray-400 font-medium capitalize">
        {label}
      </label>
      <input
        className="text-xs text-gray-700 font-medium w-full p-2 bg-gray-100 border border-gray-300"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
