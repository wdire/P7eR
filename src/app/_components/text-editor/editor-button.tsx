import {cn} from "@/app/_helpers/cn";
import React from "react";

export type EditorButtonProps = {
  icon: JSX.Element;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active: boolean;
  disabled?: boolean;
};

const EditorButton = ({icon, onClick, active, disabled}: EditorButtonProps) => {
  return (
    <button
      className={cn(
        "w-11 h-9 rounded-[4px] border border-editor-gray flex justify-center items-center transition-colors hover:bg-editor-button-hover cursor-default",
        {
          "opacity-50 pointer-events-none": disabled,
          "bg-editor-button-hover": active,
        },
      )}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="w-6 h-6 stroke-editor-primary-text">{icon}</div>
    </button>
  );
};

export default EditorButton;
