'use client';
import React, { useEffect } from 'react';
import CE_FlipCard from './client.flip.card';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_CardVariant15({
  data,
  topTitle,
  subTitle,
  buttonText,
  buttonUri,
  variant,
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
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  let colorTheme = '';
  if (variant === 'wm-main-navigation') {
    colorTheme = 'wmcolor';
  } else if (variant === 'wm-private-main-navigation') {
    colorTheme = 'privatecolor';
  }
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
              <h1
                className={`uppercase text-${colorTheme} text-2xl md:text-3xl font-bold tracking-wider`}
              >
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
                  <h3
                    className={`text-${colorTheme} text-base font-light uppercase`}
                  >
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
                <Link
                  href={`/${buttonUri ?? '/404'}`}
                  className={`uppercase text-base font-semibold bg-${colorTheme} text-white rounded-full py-2 px-4 hover:bg-gray-500 duration-300`}
                >
                  {buttonText}
                </Link>
                {topTitle === undefined ? null : (
                  <Link
                    href={'/get-invited-private'}
                    className={`uppercase text-base font-semibold rounded-full py-2 px-4 border-${colorTheme} border bg-white text-${colorTheme} hover:bg-${colorTheme} duration-300 hover:text-white-01`}
                  >
                    get invited
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      s
    </>
  );
}
