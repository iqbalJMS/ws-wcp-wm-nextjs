'use client';

import React, { useEffect } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CE_CardGrid5Private = ({
  variant,
  dataCard,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-8/12">
          <>
            {dataCard?.map((item, index) => (
              <Link
                data-aos="fade-up"
                data-aos-duration="800"
                key={index}
                href={`/insight/${item?.nid ?? '/404'}`}
                className="w-full flex-none px-10 mb-10"
              >
                <div className="group">
                  <div className="w-full h-[18rem] rounded-xl overflow-hidden mb-5 ">
                    {item?.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.image ?? ''}`}
                        alt="image"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-bottom group-hover:scale-125 transform scale-100 transition ease-in-out duration-300"
                      />
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-black font-semibold uppercase">
                      <span className="pr-2">{item?.category ?? ''}</span> |
                      <span className="pl-3">
                        {formatDate(item?.date ?? '')} hello
                      </span>
                    </div>
                    <div
                      className={`text-${theme} line-clamp-2 font-bold text-lg mb-2 pt-3`}
                    >
                      {parseHTMLToReact(item?.title)}
                    </div>
                    <div className="font-light line-clamp-3 text-sm">
                      {parseHTMLToReact(item?.description ?? '')}
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

export default CE_CardGrid5Private;
