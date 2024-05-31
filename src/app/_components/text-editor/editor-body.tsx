"use client";

import {EDITOR_BODY} from "@/app/_helpers/constants";

const EditorBody = ({defaultContent = ""}) => {
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  };

  return (
    <div
      id={EDITOR_BODY}
      className="w-full min-h-44 overflow-y-auto border-editor-gray rounded-b-[4px] border border-t-0 -mt-1 p-5 focus:outline-none"
      onPaste={handlePaste}
      style={{
        fontFamily: "var(--font-public_sans)",
      }}
      contentEditable={"true"}
      dangerouslySetInnerHTML={{__html: defaultContent}}
    ></div>
  );
};

export default EditorBody;
