'use client';
import Link from 'next/link';
import React from 'react';

const CE_BCBInvestasiPrioritas = ({ currentPage }: { currentPage: string }) => {
  const LIST_DATA_BREADCRUMB = [
    {
      url: '/bri-prioritas',
      title: 'Home',
    },
    {
      url: '/investasi-prioritas',
      title: 'investasi',
    },
  ];
  return (
    <>
      <nav
        className="flex flex-1 justify-center mb-10 px-5 "
        aria-label="Breadcrumb"
      >
        <div className="py-5 w-full md:w-10/12 flex justify-center items-center border-b-[1px] border-[#CECECE]">
          <ol className="inline-flex items-center space-x-1 text-h7 sm:mb-0 md:space-x-2 rtl:space-x-reverse ">
            {LIST_DATA_BREADCRUMB?.map((item, index) => (
              <li key={index}>
                <div className="flex items-center space-x-2">
                  <Link
                    href={item.url}
                    className="font-light text-base text-[#C0CCE2] hover:text-prioritycolor hover:underline uppercase"
                  >
                    {item.title}
                  </Link>
                  <div className="flex items-center space-x-3 ">
                    <svg
                      className=" size-3 text-gray-400 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            ))}
            <div className="flex items-center space-x-3 ">
              <div className="flex items-center w-96">
                <span className="cursor-default text-prioritycolor font-normal hover:text-primary-blue uppercase line-clamp-2">
                  {currentPage ?? ''}
                </span>
              </div>
            </div>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default CE_BCBInvestasiPrioritas;
