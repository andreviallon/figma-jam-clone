interface Props {
  combo: string;
  text: string;
}

export const ShortcutTip: React.FC<Props> = ({ combo, text }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between w-full font-medium">
        <div className="px-2 py-1 border border-black border-solid rounded text-sm">
          {combo}
        </div>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};
