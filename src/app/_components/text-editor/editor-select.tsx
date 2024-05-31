import {UpDownArrowsIcon} from "@/app/_components/icons/editor-icons";

type EditorSelectProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    label: string;
  }[];
  selectedValue: string;
};

const EditorSelect = ({onChange, options, selectedValue}: EditorSelectProps) => {
  return (
    <div className="relative inline-block h-9 min-w-[88px] font-public_sans">
      <select
        value={selectedValue}
        className="block w-full appearance-none bg-white rounded-[4px] border border-editor-gray text-[15px] h-full px-3 pr-8 text-editor-primary-text"
        onChange={onChange}
      >
        {options?.map((option, index) => (
          <option value={option.value} key={`fs-${index}`}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center stroke-editor-primary-text w-6">
        {UpDownArrowsIcon}
      </div>
    </div>
  );
};

export default EditorSelect;
