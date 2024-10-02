import React from 'react';
import Link from 'next/link';

type T_BreadcrumbProps = {
  paths: { name: string; href: string }[];
};

const Breadcrumb: React.FC<T_BreadcrumbProps> = ({ paths }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {paths.map((path, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== paths.length - 1 ? (
              <Link
                href={path.href ?? '/'}
                className="inline-flex items-center uppercase font-light text-sm  text-gray-700 hover:text-blue-700"
              >
                {path.name}
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 6.293a1 1 0 011.414 0L14 9.586a1 1 0 010 1.414l-3.293 3.293a1 1 0 01-1.414-1.414L11.586 10 9.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <span className="text-sm uppercase font-light text-blue-700">
                {path.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
