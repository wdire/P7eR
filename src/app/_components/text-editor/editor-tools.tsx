"use client";

import {
  AlignCenterIcon,
  AlignJustifiedIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListNumbersIcon,
  RedoIcon,
  UnderlineIcon,
  UndoIcon,
} from "@/app/_components/icons/editor-icons";
import {useEffect, useState} from "react";
import {EDITOR_BODY} from "@/app/_helpers/constants";
import EditorButton from "./editor-button";
import EditorSelect from "./editor-select";
import {EXEC_COMMANDS, TOOLS_STATE} from "./editor.type";

const DEFAULT_TOOLS_STATE: TOOLS_STATE = {
  bold: false,
  italic: false,
  underline: false,
  justifyLeft: false,
  justifyCenter: false,
  justifyRight: false,
  justifyFull: false,
  formatBlock: false,
  insertOrderedList: false,
  insertUnorderedList: false,
  fontSize: "16",
  undo: false,
  redo: false,
};

const EditorTools = () => {
  const [toolsState, setToolsState] = useState<TOOLS_STATE>(DEFAULT_TOOLS_STATE);

  const getParentFontSizeElm = (
    currElm: HTMLElement | null,
    recursiveLeft = 5,
  ): false | HTMLElement => {
    if (!currElm || currElm.id === EDITOR_BODY || recursiveLeft === 0) {
      return false;
    }

    if (currElm?.style?.fontSize && currElm?.style?.fontSize.endsWith("px")) {
      return currElm;
    }

    return getParentFontSizeElm(currElm.parentElement, recursiveLeft - 1);
  };

  const setNewToolsState = () => {
    const fontSizeElm = getParentFontSizeElm(
      window.getSelection()?.anchorNode?.parentNode as HTMLElement,
    );

    let {fontSize} = toolsState;

    if (fontSizeElm) {
      fontSize = fontSizeElm.style.fontSize.replace("px", "");
    }

    const newToolsStateValue: TOOLS_STATE = {
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      justifyLeft: document.queryCommandState("justifyLeft"),
      justifyCenter: document.queryCommandState("justifyCenter"),
      justifyRight: document.queryCommandState("justifyRight"),
      justifyFull: document.queryCommandState("justifyFull"),
      formatBlock: document.queryCommandState("formatBlock"),
      insertOrderedList: document.queryCommandState("insertOrderedList"),
      insertUnorderedList: document.queryCommandState("insertUnorderedList"),
      fontSize,
      undo: document.queryCommandEnabled("undo"),
      redo: document.queryCommandEnabled("redo"),
    };

    setToolsState(newToolsStateValue);
  };

  const editorExecCommand = (command: EXEC_COMMANDS, value?: string) => {
    // Note: execCommand is deprecated but still working on all browsers due to not having a good alternative yet
    document.execCommand(command, false, value);

    setNewToolsState();
  };

  useEffect(() => {
    const selectionChange = () => {
      setNewToolsState();
    };

    document.addEventListener("selectionchange", selectionChange);

    return () => {
      document.removeEventListener("selectionchange", selectionChange);
    };
  }, []);

  return (
    <>
      <EditorButton
        onClick={() => {
          editorExecCommand("bold");
        }}
        active={toolsState.bold}
        icon={BoldIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("italic")}
        active={toolsState.italic}
        icon={ItalicIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("underline")}
        active={toolsState.underline}
        icon={UnderlineIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("justifyLeft")}
        active={toolsState.justifyLeft}
        icon={AlignLeftIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("justifyCenter")}
        active={toolsState.justifyCenter}
        icon={AlignCenterIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("justifyRight")}
        active={toolsState.justifyRight}
        icon={AlignRightIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("justifyFull")}
        active={toolsState.formatBlock}
        icon={AlignJustifiedIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("insertUnorderedList")}
        active={toolsState.insertUnorderedList}
        icon={ListIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("insertOrderedList")}
        active={toolsState.insertOrderedList}
        icon={ListNumbersIcon}
      />
      <EditorSelect
        onChange={(e) => {
          // Set to true for using "style=font-size:" instead of <font size=''> element
          // then set back to false to keep using <b>, <i>, <u>
          document.execCommand("styleWithCSS", false, "true");
          editorExecCommand("fontSize", "4");
          document.execCommand("styleWithCSS", false, "false");

          const fontElements = window.getSelection()?.anchorNode?.parentNode as HTMLElement;
          fontElements.style.fontSize = `${e.target.value}px`;
        }}
        options={[
          {value: "10", label: "10 pt"},
          {value: "12", label: "12 pt"},
          {value: "14", label: "14 pt"},
          {value: "16", label: "16 pt"},
          {value: "18", label: "18 pt"},
          {value: "24", label: "24 pt"},
          {value: "32", label: "32 pt"},
        ]}
        selectedValue={toolsState.fontSize}
      />
      <EditorButton
        onClick={() => editorExecCommand("undo")}
        disabled={!toolsState.undo}
        active={false}
        icon={UndoIcon}
      />
      <EditorButton
        onClick={() => editorExecCommand("redo")}
        disabled={!toolsState.redo}
        active={false}
        icon={RedoIcon}
      />
    </>
  );
};

export default EditorTools;
