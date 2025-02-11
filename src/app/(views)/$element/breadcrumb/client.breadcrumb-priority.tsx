'use client';
import Link from 'next/link';
import React from 'react';
import { BREADCRUMB_KEY } from '@/app/(views)/$constant/variables';
import { usePathname } from 'next/navigation';

const CE_BreadcrumbPriority = ({
  data,
}: {
  data: Array<{
    title: string;
    url: string;
  }>;
}) => {
  const pathname = usePathname();
  const parentRoute =
    typeof window !== 'undefined'
      ? (sessionStorage?.getItem(BREADCRUMB_KEY) ?? '')
      : '';

  const REGISTERED_PAGE_WITH_CUSTOM_ROUTE = [
    '/investasi-prioritas',
    '/bancassurance-prioritas',
    '/travel-privileges',
    '/lifestyle-privileges',
    '/information-privilege',
    '/concierge-privilege',
    '/videos-prioritas',
    '/debit-detail-prioritas',
    '/get-invited-prioritas',
    '/promo-prioritas',
    '/prioritas-magazine',
    '/privacy-prioritas',
    '/terms-of-use-prioritas',
  ];

  const isUsingCustomRoute =
    REGISTERED_PAGE_WITH_CUSTOM_ROUTE.includes(pathname) && parentRoute;

  const customPaths = isUsingCustomRoute
    ? [...data, ...JSON?.parse(parentRoute ?? undefined)]
    : data;

  const customURLBreadcrumb =
    parentRoute && REGISTERED_PAGE_WITH_CUSTOM_ROUTE.includes(pathname)
      ? customPaths
      : data;

  return (
    <>
      <nav className="flex flex-1 justify-center mb-10" aria-label="Breadcrumb">
        <div className="py-5 w-8/12 flex justify-center items-center border-b-[1px] border-[#CECECE]">
          <ol className="inline-flex items-center space-x-1 text-h7 sm:mb-0 md:space-x-2 rtl:space-x-reverse ">
            <li>
              <div className="flex items-center space-x-3">
                {customURLBreadcrumb?.map((item, index) => {
                  if (index + 1 === customURLBreadcrumb?.length) {
                    return (
                      <Link
                        key={index}
                        href={item?.url}
                        className="font-light text-prioritycolor hover:text-prioritycolor flex items-center uppercase cursor-default"
                      >
                        {item?.title}
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        key={index}
                        href={item?.url}
                        className="font-light text-[#C0CCE2] hover:text-prioritycolor hover:underline flex items-center uppercase"
                      >
                        {item?.title}
                        <svg
                          className=" size-3 text-gray-400 rtl:rotate-180 ml-2"
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
                      </Link>
                    );
                  }
                })}
              </div>
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default CE_BreadcrumbPriority;
