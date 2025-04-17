'use client';

import { useEffect, useRef, useState } from 'react';

type Option = {
  label: string;
  value: string;
};

interface DropDownOptions {
  options: Option[];
  placeholder?: string;
  selected: Option | null;
  variant?: string;
  // eslint-disable-next-line no-unused-vars
  onSelectedChanges: (option: Option) => void;
}

const DropDown = ({
  options,
  selected,
  onSelectedChanges,
  placeholder,
  variant,
}: DropDownOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const onBodyClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      setIsOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  let colorTheme = '';
  if (variant === 'wm-private-main-navigation') {
    colorTheme = 'white';
  } else if (variant === 'wm-prioritas-main-navigation') {
    colorTheme = 'white';
  } else {
    colorTheme = 'black';
  }

  return (
    <div ref={ref}>
      <div className="w-full">
        <div className="relative w-full">
          <div
            onClick={toggleDropdown}
            className={`mt-1 flex w-full cursor-pointer rounded-2xl border-[1px] hover:bg-black-50 border-${colorTheme} px-5 py-3 text-left outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300`}
          >
            <div className="flex justify-between w-full">
              {selected ? (
                <div className="flex gap-x-2">
                  <span
                    className={`font-normal block truncate text-${colorTheme}`}
                  >
                    {selected.label}
                  </span>
                </div>
              ) : (
                <span
                  className={`font-medium block truncate text-${colorTheme}`}
                >
                  {placeholder}
                </span>
              )}
            </div>
          </div>
          {isOpen && (
            <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 ring-black ring-1 overflow-auto focus:outline-none text-sm h-72 ">
              {options.map((option) => (
                <li
                  key={option.label}
                  onClick={() => onSelectedChanges(option)}
                  className={`group hover:bg-blue-700 transition-all flex justify-between cursor-pointer text-gray-900 select-none relative py-2 px-3`}
                >
                  <div className="flex items-center gap-x-2">
                    <span className="group-hover:text-white font-normal block truncate">
                      {option.label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
