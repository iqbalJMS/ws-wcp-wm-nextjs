'use client';

import React, { useEffect } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
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
          {dataCard?.map((item, index) => (
            <div
              onClick={() =>
                router.push(`/article-detail-priority/${item?.nid ?? '/404'}`)
              }
              key={index}
              className="w-full flex-none px-10 mb-10 cursor-pointer"
            >
              <div className="w-80 group cursor-pointer p-3 hover:border hover:shadow-lg">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full h-[18rem] rounded-xl overflow-hidden mb-5 "
                >
                  {item?.image && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item?.image ?? ''}`}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-96 h-96 object-cover object-bottom group-hover:scale-125 transform transition ease-in-out duration-300 rounded-md"
                    />
                  )}
                </div>
                <div className="h-40 overflow-hidden pb-5">
                  <div className="text-[11px] text-black font-semibold uppercase">
                    <span className="pr-2">{item?.category ?? ''}</span>
                    {item?.category && <span>|</span>}
                    <span className="pl-3">{formatDate(item?.date ?? '')}</span>
                  </div>
                  <div
                    className={`text-${theme} line-clamp-2 font-bold text-base mb-2 pt-3 leading-5`}
                  >
                    {parseHTMLToReact(item?.title ?? '')}
                  </div>
                  <div className="w-full line-clamp-3 text-sm text-gray-500">
                    {parseHTMLToReact(item?.description ?? '')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CE_CardGrid7Priority;
