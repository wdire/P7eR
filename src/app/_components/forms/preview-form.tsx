"use client";

import React, {useRef} from "react";
import TextEditor from "../text-editor";

const PreviewForm = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(editorRef.current?.innerHTML || "");
  };

  return (
    <>
      <form className="p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <div className="text-[22px] font-medium mb-6.5">Text Editor</div>
        <TextEditor ref={editorRef} />
        <div className="flex justify-end mt-6.5">
          <button
            className="py-[10px] px-5 rounded-md bg-editor-primary text-white text-[15px] leading-[18px] transition-opacity hover:opacity-80 focus:opacity-95"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default PreviewForm;
