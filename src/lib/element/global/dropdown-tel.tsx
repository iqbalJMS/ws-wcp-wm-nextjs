'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import indoFlag from '@/../public/images/Flag.png';

type Option = {
  label: string;
  value: string;
  image: string;
};

interface DropDownOptions {
  options: Option[];
  placeholder?: string;
  selected: Option | null;
  // eslint-disable-next-line no-unused-vars
  onSelectedChanges: (option: Option) => void;
}

const DropDownTel = ({
  options,
  selected,
  onSelectedChanges,
  placeholder,
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

  return (
    <div ref={ref}>
      <div className="w-full">
        <div className="relative w-full">
          <div
            onClick={toggleDropdown}
            className={`mt-1 flex w-full cursor-pointer rounded-2xl hover:bg-black-50 px-3 py-1 text-left outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300 relative`}
          >
            <div className="flex justify-between w-full">
              {selected ? (
                <div className="flex gap-x-2">
                  <h1>{selected.image}</h1>
                  <span className={`font-normal block truncate text-white`}>
                    {selected.value}
                  </span>
                </div>
              ) : (
                <div className={`font-medium text-white flex`}>
                  <Image src={indoFlag} alt={''} width={20} height={20} />
                  <h1 className="text-sm pl-1">+62</h1>
                </div>
              )}
            </div>
          </div>
          {isOpen && (
            <ul className="absolute z-10 mt-3 w-96 bg-white shadow-lg py-1 ring-black ring-1 overflow-auto focus:outline-none text-sm h-60   ">
              {options.map((option) => (
                <li
                  key={option.label}
                  onClick={() => {
                    onSelectedChanges(option);
                    setIsOpen(false);
                  }}
                  className={`group hover:bg-blue-700 transition-all flex justify-between cursor-pointer text-gray-900 select-none relative py-2 px-3`}
                >
                  <div className="flex items-center gap-x-2">
                    <span>
                      <h1>{option.image}</h1>
                    </span>
                    <span className="group-hover:text-white font-normal block truncate">
                      {option.label}
                    </span>
                    <span className="group-hover:text-white font-normal block truncate">
                      {option.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* no use */}
      <div className="hidden">{placeholder}</div>
    </div>
  );
};

export default DropDownTel;
