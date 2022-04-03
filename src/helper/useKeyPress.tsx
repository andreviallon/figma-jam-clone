import { KeysEnum } from "../models/keys";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export const useKeyPress = (targetKey: KeysEnum) => {
  const { disableShortcuts } = useSelector((state: RootState) => state.tool);
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => {
      if (e.key === targetKey) setKeyPressed(true);
    };

    const upHandler = (e: KeyboardEvent) => {
      if (e.key === targetKey) setKeyPressed(false);
    };
    window.addEventListener("keydown", (e) => downHandler(e));
    window.addEventListener("keyup", (e) => upHandler(e));

    return () => {
      window.removeEventListener("keydown", (e) => downHandler(e));
      window.removeEventListener("keyup", (e) => upHandler(e));
    };
  }, [targetKey]);

  if (disableShortcuts) return;
  return keyPressed;
};
