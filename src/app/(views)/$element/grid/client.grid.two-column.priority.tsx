'use client';

import React, { useEffect } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CE_TwoColumnPriority({
  variant,
  dataCard1,
  dataCard2,
  imageContent1,
  imageContent2,
}: {
  variant: any;
  dataCard1: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  dataCard2: Array<{
    textTitle?: string;
    textDesc?: string;
    listMenu?: Array<{
      image?: string;
      textLink?: string;
      urlLink?: string;
    }>;
  }>;
  imageContent1: string;
  imageContent2: string;
}) {
  let colorTheme;

  if (variant === 'wm-private-main-navigation') {
    colorTheme = 'privatecolor';
  } else {
    colorTheme = 'wmcolor';
  }

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <section className="py-5 px-5 xl:px-20">
        <div className="flex md:flex-row flex-col justify-center relative">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className={`space-y-8 px-5 max-w-lg mdmax:order-2 mt-4 xl:mt-12`}
          >
            {dataCard1?.[0]?.textTitle && (
              <h1 className="text-2xl text-[#3D3D3D] font-bold uppercase">
                {parseHTMLToReact(dataCard1?.[0]?.textTitle)}
              </h1>
            )}
            {dataCard1?.[0]?.textDesc && (
              <h2 className="text-sm text-[#521452]">
                {parseHTMLToReact(dataCard1?.[0]?.textDesc)}
              </h2>
            )}
            {dataCard1?.[0]?.listMenu &&
              dataCard1?.[0]?.listMenu.length > 0 && (
                <div className="flex gap-5 mt-5">
                  {dataCard1?.[0]?.listMenu.map((item, index) =>
                    item.image ? (
                      <Link
                        key={index}
                        href={item.urlLink ?? '/404'}
                        className="flex flex-col items-center gap-3 group/menu"
                      >
                        {item.image && (
                          <div
                            className={`p-5 xl:p-8 bg-${colorTheme} rounded-full`}
                          >
                            <Image
                              className="w-8 h-8 xl:w-10 xl:h-10"
                              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item.image}`}
                              width={1000}
                              height={1000}
                              alt={`image-${item.image}`}
                            />
                          </div>
                        )}
                        {item.textLink && (
                          <h2
                            className={`text-${colorTheme} text-sm group-hover/menu:underline `}
                          >
                            {item.textLink}
                          </h2>
                        )}
                      </Link>
                    ) : (
                      <Link key={index} href={item.urlLink ?? '/404'}>
                        <div
                          className={`px-5 py-3 bg-${colorTheme} rounded-3xl hover:opacity-45`}
                        >
                          {item.textLink && (
                            <h2 className={`text-white text-sm uppercase`}>
                              {item.textLink}
                            </h2>
                          )}
                        </div>
                      </Link>
                    )
                  )}
                </div>
              )}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="mdmax:order-1 md:max-w-[50%] flex items-center"
          >
            {imageContent1 && (
              <Image
                src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${imageContent1}`}
                className="w-full h-auto md:w-[50vh] lg:w-full lg:h-auto bg-no-repeat bg-cover rounded-lg"
                width={1000}
                height={1000}
                alt={`image-${imageContent1}`}
              />
            )}
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center relative">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="mdmax:order-1 md:max-w-[50%] flex items-center"
          >
            {imageContent2 && (
              <Image
                src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${imageContent2}`}
                className="w-full h-auto md:w-[50vh] lg:w-full lg:h-auto bg-no-repeat bg-cover rounded-lg"
                width={1000}
                height={1000}
                alt={`image-${imageContent2}`}
              />
            )}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className={`space-y-8 pl-10 px-5 max-w-lg mdmax:order-2 mt-4 xl:mt-12`}
          >
            {dataCard2?.[0]?.textTitle && (
              <h1 className="text-2xl text-[#3D3D3D] font-bold uppercase">
                {parseHTMLToReact(dataCard2?.[0]?.textTitle)}
              </h1>
            )}
            {dataCard2?.[0]?.textDesc && (
              <h2 className="text-sm text-[#521452]">
                {parseHTMLToReact(dataCard2?.[0]?.textDesc)}
              </h2>
            )}
            {dataCard2?.[0]?.listMenu &&
              dataCard2?.[0]?.listMenu.length > 0 && (
                <div className="flex gap-5 mt-5">
                  {dataCard2?.[0]?.listMenu.map((item, index) =>
                    item.image ? (
                      <Link
                        key={index}
                        href={item.urlLink ?? ''}
                        className="flex flex-col items-center gap-3 group/menu"
                      >
                        {item.image && (
                          <div
                            className={`p-5 xl:p-8 bg-${colorTheme} rounded-full`}
                          >
                            <Image
                              className="w-8 h-8 xl:w-10 xl:h-10"
                              src={`${process.env.NEXT_PUBLIC_SELF_BASE_URL}/api/file/?path=${item.image}`}
                              width={1000}
                              height={1000}
                              alt={`image-${item.image}`}
                            />
                          </div>
                        )}
                        {item.textLink && (
                          <h2
                            className={`text-${colorTheme} text-sm group-hover/menu:underline`}
                          >
                            {item.textLink}
                          </h2>
                        )}
                      </Link>
                    ) : (
                      <Link key={index} href={item.urlLink ?? '/404'}>
                        <div
                          className={`px-5 py-3 bg-${colorTheme} rounded-3xl hover:opacity-45`}
                        >
                          {item.textLink && (
                            <h2 className={`text-white text-sm uppercase`}>
                              {item.textLink}
                            </h2>
                          )}
                        </div>
                      </Link>
                    )
                  )}
                </div>
              )}
          </div>
        </div>
      </section>
    </>
  );
}
