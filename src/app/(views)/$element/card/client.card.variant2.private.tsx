'use client';
import React from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import Image from 'next/image';

export default function CE_CardVariant2Private({
  data,
  bgImage,
  title,
}: {
  data: Array<{
    icon: string;
    label: string;
    desc: string;
  }>;
  bgImage: string;
  title: string;
}) {
  return (
    <>
      <div
        className="w-full h-[60vh] flex flex-col items-center justify-center p-5"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage})`,
          backgroundPosition: 'center',
        }}
      >
        <section className="w-full p-5 md:w-11/12 lg:w-10/12 xl:w-8/12  pb-16">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="uppercase space-y-2 pb-5"
          >
            {title && (
              <h1 className="text-4xl lg:text-3xl xl:text-4xl font-bold text-center text-privatecolor ">
                {parseHTMLToReact(title)}
              </h1>
            )}
          </div>
        </section>
        <section className="w-full lg:w-10/12 xl:w-8/12 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.map(({ label, icon, desc }, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                key={index}
                className="group w-full h-60 flex flex-col items-center justify-center hover:bg-privatecolor hover:rounded-xl duration-300"
              >
                <Image
                  alt={'icon-card'}
                  width={70}
                  height={70}
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${icon}`}
                />

                {label && (
                  <h1 className="text-black text-lg font-medium group-hover:text-white pt-7">
                    {parseHTMLToReact(label)}
                  </h1>
                )}
                {desc && (
                  <h2 className="text-xs pt-2 font-light text-center group-hover:text-white">
                    {parseHTMLToReact(desc)}
                  </h2>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
