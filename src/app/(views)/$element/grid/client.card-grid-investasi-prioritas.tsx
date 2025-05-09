'use client';

import React, { useEffect } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CE_InvestasiPrioritas = ({
  dataCard,
}: {
  dataCard: Array<{
    title: string;
    image: string;
    description: string;
    nid: string;
  }>;
}) => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div className="container py-10 px-20 mdmax:px-10">
        <div className="flex flex-wrap -mx-10">
          {dataCard?.map((item, index) => (
            <Link
              data-aos="fade-up"
              data-aos-duration="500"
              href={`/investasi-detail-prioritas/${item?.nid ?? '/404'}`}
              key={index}
              className="w-1/3 mdmax:w-full flex-none px-10 mb-10"
            >
              <div className="p-3 shadow-xl cursor-pointer group">
                <div className="group w-full h-72 p-3 overflow-hidden flex justify-center items-center">
                  {item?.image && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${item?.image ?? ''}`}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-96 object-cover object-top group-hover:scale-125 transform scale-100 transition ease-in-out duration-300"
                    />
                  )}
                </div>
                <div className="p-3 h-64">
                  <div className="text-black text-xl font-extrabold uppercase">
                    {item?.title}
                  </div>
                  <div className="py-5 text-slate-600 line-clamp-3">
                    {parseHTMLToReact(item?.description)}
                  </div>
                  <div className="pt-5">
                    <div className="text-wmcolor font-bold uppercase text-sm inline-flex items-center justify-center gap-2">
                      lihat detail
                      <svg
                        className="w-6 h-6 group-hover:translate-x-2 duration-200 "
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

export default CE_InvestasiPrioritas;
