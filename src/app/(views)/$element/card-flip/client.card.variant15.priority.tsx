'use client';
import React, { useEffect } from 'react';
import CE_FlipCard from './client.flip.card';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_CardVariant15Priority({
  data,
  topTitle,
  subTitle,
  buttonText,
  buttonUri,
}: {
  data: Array<{
    title: string;
    subtitle: string;
    desc: string;
    frontImage: string;
    backImage: string;
  }>;
  topTitle: string;
  subTitle: string;
  buttonText: string;
  buttonUri: string;
  variant: string;
}) {
  const pathName = usePathname();
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-full h-auto flex justify-center pt-20 pb-10">
        <div className=" w-[40rem] h-full md:w-[50rem] xl:w-[60rem] grid grid-cols-1 ">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="w-full flex flex-col items-center px-16"
          >
            {topTitle && (
              <h1 className="uppercase text-prioritycolor text-2xl md:text-3xl font-bold tracking-wider">
                {parseHTMLToReact(topTitle)}
              </h1>
            )}
            {subTitle && (
              <h2 className="text-sm font-light w-full md:w-10/12 lg:w-8/12 text-center pt-2">
                {parseHTMLToReact(subTitle)}
              </h2>
            )}
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 pt-0 md:pt-16 space-x-0 lg:space-x-16">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              className="flex justify-center items-start"
            >
              {data && (
                <CE_FlipCard
                  frontImage={data?.[0]?.frontImage}
                  backImage={data?.[0]?.backImage}
                />
              )}
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="text-center md:text-start pt-0 md:pt-4"
            >
              <div className="space-y-2 px-16 md:px-0">
                {data?.[0]?.title && (
                  <h3 className="text-prioritycolor text-base font-light uppercase">
                    {parseHTMLToReact(data?.[0]?.title)}
                  </h3>
                )}
                {data?.[0]?.subtitle && (
                  <h1 className="text-2xl font-bold tracking-wide">
                    {parseHTMLToReact(data?.[0]?.subtitle)}
                  </h1>
                )}
                {data?.[0]?.desc && (
                  <h2 className="text-sm font-light">
                    {parseHTMLToReact(data?.[0]?.desc)}
                  </h2>
                )}
              </div>
              <div className="pt-8 xl:pt-16 space-x-4">
                {pathName === '/debit-detail-prioritas' && (
                  <Link
                    href={`${buttonUri ?? '/404'}`}
                    className="uppercase bg-prioritycolor text-base font-semibold bg-prtext-prioritycolor text-white rounded-full py-2 px-4 hover:bg-gray-500 duration-300"
                  >
                    {buttonText}
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
