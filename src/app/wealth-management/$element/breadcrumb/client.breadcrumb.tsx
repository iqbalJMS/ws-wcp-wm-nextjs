import React from 'react';

const CE_Breadcrumb = ({ currentPage }: { currentPage: string }) => {
  return (
    <nav className="flex flex-1 justify-center" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 text-h7 sm:mb-0 md:space-x-2 rtl:space-x-reverse">
        <li>
          <div className="flex items-center">
            <a
              href="/"
              className="font-extralight text-tetriary hover:text-primary-blue"
            >
              Home
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center ">
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
            <span className="mx-2 font-normal text-primary-blue">
              {currentPage}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default CE_Breadcrumb;
