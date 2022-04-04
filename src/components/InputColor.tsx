import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  color: string;
  updateValue: (value: string) => void;
  disableShortcuts: (value: boolean) => void;
}

export const InputColor: React.FC<Props> = ({
  color,
  updateValue,
  disableShortcuts,
}) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    disableShortcuts(focused);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  const onFocus = () => setFocused(true);

  const onBlur = () => setFocused(false);

  const handleInputColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateValue(event.target.value ? event.target.value : "#000000");
  };

  return (
    <input
      className="w-10 h-10 flex items-center justify-center"
      name="fill"
      type="color"
      value={color}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={handleInputColorChange}
    />
  );
};
