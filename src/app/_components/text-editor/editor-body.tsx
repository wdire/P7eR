"use client";

import {EDITOR_BODY} from "@/app/_helpers/constants";
import React from "react";

const EditorBody = React.forwardRef<HTMLDivElement, {content: string}>(function EditorBody(
  {content = ""},
  ref,
) {
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  };

  return (
    <div
      ref={ref}
      id={EDITOR_BODY}
      className="w-full min-h-44 overflow-y-auto border-editor-gray rounded-b-[4px] border border-t-0 -mt-1 p-5 focus:outline-none"
      onPaste={handlePaste}
      style={{
        fontFamily: "var(--font-public_sans)",
      }}
      contentEditable={"true"}
      dangerouslySetInnerHTML={{__html: content}}
    ></div>
  );
});

export default EditorBody;
