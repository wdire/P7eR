export type EXEC_COMMANDS =
  | "bold"
  | "italic"
  | "underline"
  | "justifyLeft"
  | "justifyCenter"
  | "justifyRight"
  | "justifyFull"
  | "formatBlock"
  | "insertOrderedList"
  | "insertUnorderedList"
  | "fontSize"
  | "redo"
  | "undo"
  | "insertHTML";

export type TOOLS_STATE = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  justifyLeft: boolean;
  justifyCenter: boolean;
  justifyRight: boolean;
  justifyFull: boolean;
  formatBlock: boolean;
  insertOrderedList: boolean;
  insertUnorderedList: boolean;
  fontSize: string;
  undo: boolean;
  redo: boolean;
};
