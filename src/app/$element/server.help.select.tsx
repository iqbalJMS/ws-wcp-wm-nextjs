import { T_InputSelectItem } from "@/lib/element/client/input";

type T_HelpSectionSelectProps = {
  open: boolean;
  list: T_InputSelectItem[];
  setOpen: (_active: boolean) => void;
  onChange: (_item: T_InputSelectItem) => void;
};

export default function SE_HelpSelect({
  open,
  list,
  setOpen,
  onChange,
}: T_HelpSectionSelectProps) {
  const handleChoose = (item: T_InputSelectItem) => {
    onChange?.(item);
    setOpen(false);
  };

  if (open) {
    return (
      <ul className="w-full bg-white absolute max-h-96 overflow-y-auto -z-[1] pt-10 -mt-8 rounded-b-3xl shadow-lg">
        {list.map((item, index) => (
          <li key={index}>
            <button
              className="w-full py-4 hover:bg-gray-100 md:text-left text-center md:px-20 md:text-lg text-md"
              onClick={() => handleChoose(item)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}
