'use client';
import React from 'react';

const CE_BreadcrumbPriority = ({
  data,
}: {
  data: Array<{
    title: string;
    url: string;
  }>;
}) => {
  return (
    <>
      <nav
        className="flex flex-1 justify-center mb-10 "
        aria-label="Breadcrumb"
      >
        <div className="py-5 w-8/12 flex justify-center items-center border-b-[1px] border-[#CECECE]">
          <ol className="inline-flex items-center space-x-1 text-h7 sm:mb-0 md:space-x-2 rtl:space-x-reverse ">
            <li>
              <div className="flex items-center">
                <a
                  href={'/web/wealth-management/bri-prioritas'}
                  className="font-light text-[#C0CCE2] hover:text-prioritycolor hover:underline uppercase"
                >
                  {data?.[0]?.title}
                </a>
              </div>
            </li>
            <li aria-current="page">
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
                {data && (
                  <div className="flex items-center">
                    <span className="cursor-default text-prioritycolor font-normal hover:text-primary-blue uppercase">
                      {data?.[1]?.title}
                    </span>
                  </div>
                )}
              </div>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default CE_BreadcrumbPriority;
