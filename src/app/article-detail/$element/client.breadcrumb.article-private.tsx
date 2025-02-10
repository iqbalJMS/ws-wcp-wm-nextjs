'use client';
import React from 'react';

const CE_BreadCrumbArticlePrivate = ({
  currentPage,
}: {
  currentPage: string;
}) => {
  const LIST_DATA_BREADCRUMB = [
    {
      url: '/web/wealth-management/bri-private',
      title: 'Home',
    },
    {
      url: '/web/wealth-management/article',
      title: 'Article',
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
                  <a
                    href={item.url}
                    className="font-light text-base text-[#C0CCE2] hover:text-privatecolor hover:underline uppercase"
                  >
                    {item.title}
                  </a>
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
              <div className="flex items-center">
                <span className="cursor-default text-privatecolor font-normal hover:text-primary-blue uppercase">
                  {currentPage}
                </span>
              </div>
            </div>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default CE_BreadCrumbArticlePrivate;
