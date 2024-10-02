'use client';

import { ArrowDownIcon } from '@/lib/element/global/arrow-down-icon';
import Link from 'next/link';
import React, { useRef } from 'react';
import SE_HelpSectionSelect from './server.help.select';
import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import { T_InputSelectItem } from '@/lib/element/client/input';

type T_HelpContentProps = {
  listItems: T_InputSelectItem[];
  title: string;
};

export default function CE_HelpContent({
  title,
  listItems,
}: T_HelpContentProps) {
  const [selectedItem, setSelectedItem] = React.useState(listItems[0]);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div
      className="md:max-w-5xl max-w-[90%] relative z-10 mx-auto -mt-24"
      ref={dropdownRef}
    >
      <div className="py-5 px-8 rounded-[1.8rem] shadow-md bg-white flex justify-between md:items-center md:flex-row flex-col gap-4">
        <div className="z-10 flex items-center w-full gap-4">
          <h2 className="font-bold md:text-xl text-md text-red-500 flex-none w-fit">
            {title.toUpperCase()}:
          </h2>
          <div
            ref={dropdownRef}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center cursor-pointer w-full border-b-2 pb-1"
          >
            <div className="md:text-xl text-md w-full font-normal">
              {selectedItem ? selectedItem?.title : ''}
            </div>
            <div>
              <ArrowDownIcon
                className={`transition-all duration-300 ease-out ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <Link href={selectedItem.value}>
            <button
              disabled={isOpen}
              className={`font-normal text-sm text-white rounded-full md:py-4 py-2 px-6 w-full ${
                isOpen ? 'bg-gray-400' : 'bg-orange-400 hover:bg-orange-500'
              }`}
            >
              BANTUAN
            </button>
          </Link>
        </div>
      </div>
      <SE_HelpSectionSelect
        list={listItems}
        open={isOpen}
        onChange={setSelectedItem}
        setOpen={setIsOpen}
      />
    </div>
  );
}
