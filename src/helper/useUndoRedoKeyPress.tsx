import { KeysEnum } from "../models/keys";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redo, undo } from "../state/stage/StageActions";

export const useUndoRedoKeyPress = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => {
      if (e.key === KeysEnum.Z && e.shiftKey === false && e.metaKey === true) {
        dispatch(undo());
      } else if (
        e.key === KeysEnum.Z &&
        e.shiftKey === true &&
        e.metaKey === true
      ) {
        dispatch(redo());
      }
    };

    window.addEventListener("keydown", (e) => downHandler(e));

    return () => {
      window.removeEventListener("keydown", (e) => downHandler(e));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
