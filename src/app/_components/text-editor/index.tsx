import React from "react";
import EditorTools from "./editor-tools";
import EditorBody from "./editor-body";

const TextEditor = () => {
  return (
    <div className="w-full rounded-[4px] flex-col">
      <div className="w-full rounded-[4px] border-editor-gray border bg-white p-3 sticky top-0">
        <div className="w-full flex gap-[10px] flex-wrap">
          <EditorTools />
        </div>
      </div>
      <EditorBody defaultContent="<p>Hello World</p>" />
    </div>
  );
};

export default TextEditor;
