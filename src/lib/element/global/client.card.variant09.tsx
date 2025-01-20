'use client';

// import Image from '@/lib/element/global/image';
import Link from '@/lib/element/global/link';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

export type T_CardVariant09Props = {
  type?: 'search' | 'normal';
  data?: {
    title?: string;
    description?: string;
    button?: {
      title?: string;
      link?: string;
      image?: string;
      extern?: boolean;
    };
  }[];
};

export default function CE_CardVariant09({
  data,
  type = 'normal',
}: T_CardVariant09Props) {
  return (
    <>
      <div
        className={`${type === 'search' ? 'py-0' : 'py-10'} container overflow-hidden`}
      >
        <div className="flex flex-wrap -mx-5">
          {data?.map((item, index) => {
            return (
              <div key={index} className="w-full flex-none px-5 mb-10">
                <div className="rounded-xl bg-white overflow-hidden shadow-xl">
                  <div>
                    <div
                      className={`${type === 'search' ? 'py-5' : 'py-10'} p-10 mdmax:p-5 flex mdmax:flex-col items-center mdmax:items-start justify-between relative`}
                    >
                      <div className="mdmax:mb-5">
                        {item?.title && (
                          <div className="lg:text-lg text-base font-semibold capitalize text-blue-01 text-line-1 mb-2">
                            {parseHTMLToReact(item?.title)}
                          </div>
                        )}

                        {item?.description && (
                          <div className="text-black lg:text-sm text-sm text-opacity-70 lowercase">
                            {parseHTMLToReact(item?.description)}
                          </div>
                        )}
                      </div>
                      <div className="inset-y-0 absolute right-0 flex items-center justify-center">
                        {item?.button?.link && (
                          <Link
                            href={item?.button?.link}
                            extern={item?.button?.extern}
                            target={item?.button?.extern ? '_blank' : ''}
                          >
                            <div className="inline-flex absolute inset-y-0 transform transition-all ease-in-out right-0 bg-white text-blue-01 lg:hover:text-white items-center lg:text-base text-xs px-10 group">
                              <div className="absolute inset-0 -right-4 lg:bg-red-700 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0"></div>
                              <div className="relative z-10 flex items-center">
                                {item?.button?.image && (
                                  <div className="w-5 h-5 mr-2 flex items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-arrow-down-to-line"
                                    >
                                      <path d="M12 17V3" />
                                      <path d="m6 11 6 6 6-6" />
                                      <path d="M19 21H5" />
                                    </svg>
                                  </div>
                                )}
                                {item?.button?.title}
                              </div>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
