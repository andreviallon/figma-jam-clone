import { useState, KeyboardEvent, useEffect, ChangeEvent } from "react";
import { KeysEnum } from "../models/keys";

interface Props {
  label?: string;
  value: string;
  updateValue: (value: string) => void;
  disableShortcuts: (value: boolean) => void;
}

export const InputText: React.FC<Props> = ({
  label,
  value,
  updateValue,
  disableShortcuts,
}) => {
  const [inputValue, setInputValue] = useState<string>(value.toString());
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  useEffect(() => {
    disableShortcuts(focused);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  const onFocus = () => setFocused(true);

  const onBlur = () => {
    setFocused(false);
    dispatchValue();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.currentTarget?.value);
    validateInput();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === KeysEnum.ENTER) {
      dispatchValue();
    }
  };

  const validateInput = (): boolean => {
    const regexPattern = `^#(?:[0-9a-fA-F]{6})$`;

    return inputValue.match(regexPattern) !== null;
  };

  const dispatchValue = () => {
    if (!validateInput()) {
      setInputValue(value.toString());
    } else {
      updateValue(inputValue);
    }
  };

  return (
    <input
      className="text-xs text-gray-700 font-medium w-full p-2 bg-gray-100 border border-gray-300"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
    />
  );
};
