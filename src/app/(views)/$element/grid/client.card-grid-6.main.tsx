'use client';

import React, { useEffect } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CE_CardGrid6Main = ({
  dataCard,
  variant,
}: {
  dataCard: Array<{
    title: string;
    image: string;
    description: string;
    nid: string;
  }>;
  variant: string;
}) => {
  let theme = '';

  if (variant == 'wm-private-main-navigation') {
    theme = 'privatecolor';
  } else if (variant == 'wm-prioritas-main-navigation') {
    theme = 'prioritycolor';
  }

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  place-content-center">
          {dataCard.map((item, index) => (
            <Link
              data-aos="fade-up"
              data-aos-duration="800"
              href={`${variant === 'wm-private-main-navigation' ? `/program-detail/${item?.nid ?? '/404'}` : `/program-detail-prioritas/${item?.nid ?? '/404'}`}`}
              key={index}
              className=" flex-none mb-1 cursor-default my-10"
            >
              <div className="w-96 overflow-hidden py-5 shadow-xl cursor-pointer group">
                <div className="w-full h-[30rem] overflow-hidden mb-2">
                  {item?.image && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''}`}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain object-top group-hover:scale-125 transform scale-100 transition ease-in-out duration-300"
                    />
                  )}
                </div>
                <div className="p-5 h-64 ">
                  <div
                    className={`text-${theme} text-xl font-bold mb-2 line-clamp-2`}
                  >
                    {item?.title}
                  </div>
                  <div className=" text-slate-600 line-clamp-4">
                    {parseHTMLToReact(item?.description ?? '')}
                  </div>
                  <div className="pt-3">
                    <div
                      className={`text-${theme} uppercase text-sm inline-flex items-center justify-center gap-2`}
                    >
                      read more
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid6Main;
