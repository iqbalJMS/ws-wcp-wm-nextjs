import React, { useRef, useState } from 'react';

import { T_InputSelectItem, T_InputState } from '@/lib/element/client/input';
import { T_Icon } from '@/lib/element/client/icon';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';

export function ArrowDownIcon({ width = 16, height = 9, className }: T_Icon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.686238 1.06271C0.932059 0.820392 1.32778 0.823229 1.5701 1.06905L7.22982 6.81051C7.65344 7.24025 8.34656 7.24025 8.77018 6.81051L14.4299 1.06905C14.6722 0.823229 15.0679 0.820392 15.3138 1.06271C15.5596 1.30504 15.5624 1.70075 15.3201 1.94657L9.66038 7.68803C8.74719 8.61441 7.25281 8.61441 6.33962 7.68803L0.679902 1.94657C0.43758 1.70075 0.440417 1.30504 0.686238 1.06271Z"
        fill="currentColor"
      />
    </svg>
  );
}

export type T_InputSelectOnChange =
  | T_InputSelectItem
  | (T_InputSelectItem | undefined)[]
  | undefined;

type T_InputSelectProps = {
  value: string | number | (string | number)[];
  list?: T_InputSelectItem[];
  state?: T_InputState;
  disabled?: boolean;
  multiple?: boolean;
  placeholder?: string;
  withFilter?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (item: T_InputSelectOnChange) => void;
};

const InputSelect: React.FC<T_InputSelectProps> = ({
  value,
  list,
  state = 'init',
  disabled = false,
  multiple = false,
  placeholder = '',
  withFilter = true,
  onChange,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>(
    Array.isArray(value) ? value : []
  );

  const selectedItem = list?.find((item) => item.value === value);

  const handleChoose = (item: T_InputSelectItem) => {
    if (multiple) {
      setSelectedItems((prevSelectedItems) => {
        if (prevSelectedItems.includes(item.value)) {
          return prevSelectedItems.filter((value) => value !== item.value);
        } else {
          return [...prevSelectedItems, item.value];
        }
      });
    } else {
      onChange?.(item);
      setDropdownActive(false);
    }
  };

  const newList = list?.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );
  useOnClickOutside(elementRef, () => setDropdownActive(false));

  // useEffect(() => {
  //   const result = multiple
  //     ? selectedItems.map((value) => list?.find((item) => item.value === value))
  //     : selectedItem;
  //   onChange && onChange(result);
  // }, [selectedItems]);

  return (
    <div ref={elementRef} className="relative">
      <div
        className={`px-4 h-12  bg-white border flex items-center justify-between rounded-md ${
          !disabled ? 'cursor-pointer' : ''
        } ${
          dropdownActive
            ? 'border-blue-01 border-opacity-50 ring-4 ring-light-02 ring-opacity-30'
            : state === 'error'
              ? 'border-red-500'
              : 'border-black border-opacity-10'
        }`}
        onClick={() => !disabled && setDropdownActive(!dropdownActive)}
      >
        {!multiple ? (
          <div
            className={`mr-4 text-base mdmax:text-sm text-line-1 ${selectedItem ? '' : 'text-black text-opacity-40 font-light'}`}
          >
            {selectedItem ? selectedItem?.title : placeholder}
          </div>
        ) : (
          <div className="flex items-center flex-wrap -mx-2">
            {selectedItems.map((value, index) => {
              const item = list?.find((item) => item.value === value);
              return (
                <div key={index} className="px-2">
                  <div className="bg-blue01 bg-opacity-10 rounded-4 flex overflow-hidden">
                    <div className=" font-medium text-line-1 text-blue01 px-8">
                      {item?.title}
                    </div>
                    {!disabled && (
                      <div
                        className="bg-blue01 px-5 items-stretch"
                        onClick={() => handleChoose(item!)}
                      >
                        <div className="h-full flex items-center">
                          {/* <Icon name="ph:x-bold" className="w-8 h-8 text-white" /> */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div>
          <ArrowDownIcon
            className={`transition-all duration-300 ease-out text-black text-opacity-50  
                        ${dropdownActive ? 'transform rotate-180' : ''}`}
          />
        </div>
      </div>

      {dropdownActive && (
        <div className="rounded-md p-2 w-full  bg-white absolute top-full left-0 z-50 mt-2 ring-1 ring-black ring-opacity-10">
          {withFilter && (
            <div className="mb-2">
              <input
                type="text"
                placeholder="Search..."
                className="focus:outline-none px-4 rounded-md w-full text-12 py-2"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                onKeyUp={(e) =>
                  e.key === 'Enter' &&
                  newList &&
                  newList[0] &&
                  handleChoose(newList[0])
                }
              />
            </div>
          )}
          <div className="py-0 w-full max-h-40 overflow-y-auto overflow-custom">
            {newList?.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-1">
                  <div
                    className={`px-4 py-2 rounded-md ${
                      !item.disabled
                        ? 'cursor-pointer hover:bg-blue-02 hover:bg-opacity-5'
                        : ''
                    }`}
                    onClick={() => !item.disabled && handleChoose(item)}
                  >
                    <div
                      className={`${
                        multiple && selectedItems.includes(item.value)
                          ? 'font-medium text-blue-02'
                          : !multiple && selectedItem === item
                            ? 'font-medium text-blue-02'
                            : !item.disabled
                              ? ''
                              : 'text-black text-opacity-50'
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputSelect;
