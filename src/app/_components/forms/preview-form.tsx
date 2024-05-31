"use client";

import React, {useRef, useState} from "react";
import TextEditor from "../text-editor";

const PreviewForm = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    textEditor: "<p>Hello World!</p>",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      textEditor: editorRef.current?.innerHTML || "",
    });
  };

  return (
    <>
      <form className="p-6 shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <div className="text-[22px] font-medium mb-6.5">Text Editor</div>
        <TextEditor ref={editorRef} content={formData.textEditor} />
        <div className="flex justify-end mt-6.5">
          <button
            className="py-[10px] px-5 rounded-md bg-editor-primary text-white text-[15px] leading-[18px] transition-opacity hover:opacity-80 focus:opacity-95"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>

      <div className="p-6 shadow-lg rounded-lg mt-7">
        <div className="text-[22px] font-medium mb-3">Preview</div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 min-h-24 sm:pr-3 pb-3">
            <div className="text-center font-medium mb-4">Text Output</div>
            <div className="text-xs px-3 py-2 bg-neutral-200 rounded-lg min-h-9 flex items-center">
              <code>{formData.textEditor}</code>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 min-h-24 sm:pl-3 pt-3 sm:pt-0 sm:border-l border-t sm:border-t-0">
            <div className="text-center font-medium mb-4">Live Output</div>
            <div dangerouslySetInnerHTML={{__html: formData.textEditor}}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewForm;
