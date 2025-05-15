'use client';

import React, { useEffect } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CE_CardGrid7Priority = ({
  dataCard,
  variant,
}: {
  dataCard: Array<{
    title: string;
    category: string;
    date: string;
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
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <>
      <div className="py-10 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-8/12 lg:w-10/12 2xl:w-8/12 gap-10">
          <>
            {dataCard?.map((item, index) => (
              <Link
                data-aos="fade-up"
                data-aos-duration="800"
                key={index}
                href={`/article-detail-priority/${item?.nid ?? '/404'}`}
                className="flex-none cursor-default px-10 mb-10"
              >
                <div className="w-80 group cursor-pointer p-3 hover:border hover:shadow-lg">
                  <div className="w-full h-[18rem] rounded-xl overflow-hidden mb-5">
                    {item?.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.image ?? ''}`}
                        alt="image"
                        width={900}
                        height={900}
                        className="w-96 h-full object-cover object-bottom group-hover:scale-125 transform scale-100 transition ease-in-out duration-300 rounded-md"
                      />
                    )}
                  </div>
                  <div className="h-40 overflow-hidden pb-5">
                    <div className="text-[11px] text-black font-semibold uppercase">
                      <span className="pr-2">{item?.category ?? ''}</span> |
                      <span className="pl-3">
                        {formatDate(item?.date ?? '')}
                      </span>
                    </div>
                    <div
                      className={`text-${theme} line-clamp-2 font-bold text-base mb-2 pt-3 leading-5`}
                    >
                      {parseHTMLToReact(item?.title)}
                    </div>
                    <div className="font-light line-clamp-3 text-sm text-[#BB907C]">
                      {parseHTMLToReact(item?.description)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid7Priority;
